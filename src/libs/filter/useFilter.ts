import { z } from 'zod';

import type { PairedFood } from '@/domain';
import { pairedFoodParser } from '@/domain';
import { useSearchParams } from '@/searchParam';

const Filter = z.object({
  food: z.array(pairedFoodParser).default(() => []),
});

interface Filter {
  food: PairedFood[];
}

export const useFilter = () => {
  const { searchParams, addSearchParam } = useSearchParams();

  const filter = Filter.parse(searchParams);

  const addFilter = (partialFilter: Filter) => {
    const newFilter = { ...filter, ...partialFilter };
    addSearchParam(newFilter);
  };

  return { addFilter, filter };
};
