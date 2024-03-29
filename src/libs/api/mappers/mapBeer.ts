import type { Beer } from '@/domain';

import type { ApiBeer, ApiBeers } from '../domain/ApiBeer';
import { mapPairedFood } from './mapPairedFood';

export const mapBeer = (apiBeer: ApiBeer): Beer => ({
  abv: apiBeer.abv,
  id: apiBeer.id,
  picture: apiBeer.image_url,
  name: apiBeer.name,
  tagline: apiBeer.tagline,
  pairedFood: mapPairedFood(apiBeer.food_pairing),
  description: apiBeer.description,
  price: apiBeer.srm ?? 0,
  isFavorite: false,
});

export const mapBeers = (apiBeers: ApiBeers): Beer[] =>
  apiBeers.map(b => mapBeer(b));
