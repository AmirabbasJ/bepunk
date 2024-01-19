import { z } from 'zod';

export interface ApiBeer {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string | null;
  abv: number;
  srm: number;
  food_pairing: string[];
}
export type ApiBeers = ApiBeer[];

export const ApiBeer = z.object({
  id: z.number(),
  name: z.string(),
  tagline: z.string(),
  description: z.string(),
  image_url: z.string().nullable(),
  abv: z.number(),
  srm: z.number(),
  food_pairing: z.array(z.string()),
});

export const ApiBeers = z.array(ApiBeer);
