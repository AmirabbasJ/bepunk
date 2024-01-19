import axios from 'axios';

import type { Beer } from '@/domain';

import { ApiBeers } from './ApiBeer';
import { mapBeers } from './mappers/mapBeer';

const client = axios.create({
  baseURL: 'https://api.punkapi.com/v2/beers/',
});

export const getBeers = async (page: number = 1): Promise<Beer[]> => {
  const { data } = await client.get(`/?page=${page}&per_page=20`);
  const beers = await ApiBeers.parseAsync(data);
  return mapBeers(beers);
};
