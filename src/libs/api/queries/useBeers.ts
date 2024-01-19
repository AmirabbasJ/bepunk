import { useQuery } from 'react-query';

import type { Filter } from '@/filter';

import { getBeers } from '../api';

interface BeerConfig {
  filter: Filter;
}

export const useBeers = ({ filter }: BeerConfig) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['beers', filter],
    queryFn: () => getBeers({ filter }),
  });

  return {
    data: data ?? [],
    loading: isLoading,
  };
};
