import { useInfiniteQuery } from 'react-query';

import { useFavoriteCache } from '@/cache';
import type { BeerId } from '@/domain';
import type { Filter } from '@/filter';

import { sort } from '../../utils/sort';
import { getBeers } from '../api';

interface BeerConfig {
  filter?: Filter;
  perPage?: number;
  ids: BeerId[] | null;
}

export const useBeers = ({ filter, perPage, ids }: BeerConfig) => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['beers', 'list', ids, filter],
    queryFn: ({ pageParam = perPage == null ? undefined : 1 }) =>
      getBeers({ filter, ids, page: pageParam, limit: perPage }),
    getNextPageParam: prev => {
      return prev.next;
    },
  });

  const { favorites } = useFavoriteCache();
  const pages = data?.pages ?? [];
  const rawBeers = pages.map(p => p.beers);
  const shouldSort = filter?.sortBy != null;
  // if(filter?.sortBy)
  const sortedBeers = shouldSort
    ? sort(rawBeers, {
        by: filter.sortBy!,
        type: filter.sortType!,
      })
    : rawBeers;
  const beers = sortedBeers.map(d =>
    d.map(beer =>
      favorites.includes(beer.id) ? { ...beer, isFavorite: true } : beer,
    ),
  );

  const length =
    perPage == null
      ? 0
      : pages.reduce((counter, page) => {
          return counter + page.beers.length * perPage;
        }, perPage);

  return {
    beers,
    loading: isLoading,
    fetchNextPage,
    hasNextPage,
    length,
  };
};
