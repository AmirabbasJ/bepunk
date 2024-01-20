import { z } from 'zod';

import { pairedFoodParser } from '@/domain';

export const sortBy = {
  abv: 'abv',
  name: 'name',
} as const;

export const sortType = {
  asc: 'asc',
  des: 'des',
} as const;

export const Filter = z
  .object({
    food: pairedFoodParser.optional().nullable(),
    favorites: z
      .enum(['true', 'false'])
      .transform(v => v === 'true')
      .optional(),
    sortBy: z.enum([sortBy.abv, sortBy.name]).optional().nullable(),
    sortType: z.enum([sortType.asc, sortType.des]).optional().nullable(),
  })
  .refine(
    ({ sortType: type, sortBy: by }) =>
      (by != null && type != null) || (by == null && type == null),
  );

export type Filter = z.TypeOf<typeof Filter>;
