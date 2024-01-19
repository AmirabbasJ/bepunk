import { z } from 'zod';

import type { PairedFood } from '@/domain';
import { pairedFoodParser } from '@/domain';

export const Filter = z.object({
  food: pairedFoodParser.optional(),
});

export interface Filter {
  food?: PairedFood | null;
}
