import axios from 'axios';

import type { Beer } from '@/domain';
import type { Filter } from '@/filter';

import { ApiBeers } from './ApiBeer';
import { mapBeers } from './mappers/mapBeer';

const client = axios.create({
  baseURL: 'https://api.punkapi.com/v2/beers/',
});

interface Query {
  page?: number;
  filter: Filter;
}

const encodeQury = ({ filter, page = 1 }: Query) =>
  `?page=${page}&${filter.food ? `food=${filter.food}` : ''}`;

export const getBeers = async (query: Query): Promise<Beer[]> => {
  const { data } = await client.get(`/${encodeQury(query)}`);
  const beers = await ApiBeers.parseAsync(data);
  return mapBeers(beers);
};
