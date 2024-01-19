import { useQuery } from 'react-query';

import { getBeers } from '../api';

export const useBeers = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['beers'],
    queryFn: () => getBeers(),
  });

  return {
    data: data ?? [],
    loading: isLoading,
  };
};
