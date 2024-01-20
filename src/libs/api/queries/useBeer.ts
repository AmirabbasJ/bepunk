import { useQuery } from 'react-query';

import { useFavoriteCache } from '@/cache';
import type { Beer } from '@/domain';

import { getBeer } from '../api';

export const useBeer = (id: number) => {
  const { data = null, isLoading } = useQuery({
    queryKey: ['beers', 'detail', id],
    queryFn: () => getBeer(id),
  });

  const { favorites } = useFavoriteCache();
  const isFavorite = favorites.includes(id);
  const beer: Beer | null = data != null ? { ...data, isFavorite } : null;

  return {
    data: beer,
    loading: isLoading,
  };
};
