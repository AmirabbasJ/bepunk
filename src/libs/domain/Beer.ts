import { z } from 'zod';

import type { PairedFood } from './PairedFood';
import { pairedFoodParser } from './PairedFood';

export type BeerId = number;
export const BeerId = z.number();

export interface Beer {
  id: BeerId;
  picture: string | null;
  name: string;
  tagline: string;
  pairedFood: PairedFood | null;
  abv: number;
  description: string;
  price: number; // srm
  isFavorite: boolean;
}

const Beer = z.object({
  id: BeerId,
  name: z.string(),
  picture: z.string().url().nullable(),
  tagline: z.string(),
  pairedFood: pairedFoodParser,
  abv: z.number(),
  description: z.string(),
  price: z.number(),
  isFavorite: z.boolean().default(false),
});
