import { useInfiniteQuery } from 'react-query';

import { useFavoriteCache } from '@/cache';
import type { BeerId } from '@/domain';
import type { Filter } from '@/filter';

import { getBeers } from '../api';

interface BeerConfig {
  filter?: Filter;
  perPage?: number;
  ids?: BeerId[];
}
export const defaultPerpage = 20;

export const useBeers = ({
  filter,
  perPage = defaultPerpage,
  ids,
}: BeerConfig) => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['beers', 'list', filter?.favorites ? null : ids, filter],
    queryFn: ({ pageParam = 1 }) =>
      getBeers({ filter, ids, page: pageParam, limit: perPage }),
    getNextPageParam: prev => {
      return prev.next;
    },
  });

  const { favorites } = useFavoriteCache();
  const pages = data?.pages ?? [];
  const withFavorites = pages.map(d =>
    d.beers.map(beer =>
      favorites.includes(beer.id) ? { ...beer, isFavorite: true } : beer,
    ),
  );

  const length = pages.reduce((counter, page) => {
    return counter + page.beers.length * perPage;
  }, perPage);

  return {
    pages: withFavorites,
    loading: isLoading,
    fetchNextPage,
    hasNextPage,
    length,
  };
};
