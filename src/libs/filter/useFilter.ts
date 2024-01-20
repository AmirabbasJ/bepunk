import { useSearchParams } from '@/searchParam';

import { Filter } from './Filter';

export const useFilter = () => {
  const { searchParams, addSearchParam, resetSearchParam, loading } =
    useSearchParams();
  const result = Filter.safeParse(searchParams);
  if (!result.success) resetSearchParam();
  const filter = result.success ? result.data : {};

  const addFilter = (partialFilter: Filter) => {
    const newFilter = { ...filter, ...partialFilter };
    addSearchParam(newFilter);
  };

  return { addFilter, filter, loading };
};
