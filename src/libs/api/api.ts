import axios from 'axios';

import type { Beer } from '@/domain';

import { ApiBeers } from './ApiBeer';
import { mapBeers } from './mappers/mapBeer';

const client = axios.create({
  baseURL: 'images.punkapi.com/v2/beers/',
});

export const getBeers = async (page: number = 0): Promise<Beer[]> => {
  const data = await client.get(`/?page=${page}`);
  const beers = await ApiBeers.parseAsync(data);
  return mapBeers(beers);
};
