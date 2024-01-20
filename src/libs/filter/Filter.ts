import { z } from 'zod';

import { pairedFoodParser } from '@/domain';

export const Filter = z
  .object({
    food: pairedFoodParser.optional().nullable(),
    favorites: z
      .enum(['true', 'false'])
      .transform(v => v === 'true')
      .optional(),
    sortBy: z.enum(['abv', 'name']).optional().nullable(),
    sortType: z.enum(['asc', 'des']).optional().nullable(),
  })
  .refine(
    ({ sortType, sortBy }) =>
      (sortBy != null && sortType != null) ||
      (sortBy == null && sortType == null),
  );

export type Filter = z.TypeOf<typeof Filter>;
