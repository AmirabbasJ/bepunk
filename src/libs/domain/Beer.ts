import { z } from 'zod';

import type { PairedFood } from './PairedFood';
import { pairedFood } from './PairedFood';

export interface Beer {
  id: number;
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
  id: z.number(),
  name: z.string(),
  picture: z.string().url().nullable(),
  tagline: z.string(),
  pairedFood: z.enum(
    Object.values(pairedFood) as [PairedFood, PairedFood, PairedFood],
  ),
  abv: z.number(),
  description: z.string(),
  price: z.number(),
  isFavorite: z.boolean().default(false),
});
