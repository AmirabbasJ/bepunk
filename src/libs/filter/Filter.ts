import { z } from 'zod';

import { pairedFoodParser } from '@/domain';

export const Filter = z.object({
  food: pairedFoodParser.optional(),
  favorites: z
    .enum(['true', 'false'])
    .transform(v => v === 'true')
    .optional(),
});

export type Filter = z.TypeOf<typeof Filter>;
