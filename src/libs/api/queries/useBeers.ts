import { useQuery } from 'react-query';

import { useFavoriteCache } from '@/cache';
import type { BeerId } from '@/domain';
import type { Filter } from '@/filter';

import { getBeers } from '../api';

interface BeerConfig {
  filter: Filter;
  ids?: BeerId[];
}

export const useBeers = ({ filter, ids }: BeerConfig) => {
  const {
    data = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ['beers', 'list', filter],
    queryFn: () => getBeers({ filter, ids }),
  });

  const { favorites } = useFavoriteCache();

  const withFavorites = data.map(beer =>
    favorites.includes(beer.id) ? { ...beer, isFavorite: true } : beer,
  );

  return {
    data: withFavorites,
    loading: isLoading,
  };
};
