import { useQuery } from 'react-query';

import { useFavoriteCache } from '@/cache';
import type { Filter } from '@/filter';

import { getBeers } from '../api';

interface BeerConfig {
  filter: Filter;
}

export const useBeers = ({ filter }: BeerConfig) => {
  const {
    data = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ['beers', 'list', filter],
    queryFn: () => getBeers({ filter }),
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
