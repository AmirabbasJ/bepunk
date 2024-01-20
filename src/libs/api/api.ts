import axios from 'axios';

import type { Beer, BeerId } from '@/domain';
import type { Filter } from '@/filter';

import { ApiBeer, ApiBeers } from './ApiBeer';
import { mapBeer, mapBeers } from './mappers/mapBeer';

const client = axios.create({
  baseURL: 'https://api.punkapi.com/v2/beers/',
});

interface Query {
  page?: number;
  ids?: BeerId[];
  filter: Filter;
}

const encodeQury = ({ filter, page = 1, ids }: Query) =>
  `?page=${page}&${filter.food ? `food=${filter.food}` : ''}&${filter.favorites && ids?.length !== 0 ? `ids=${ids!.join('|')}` : ''}`;

export const getBeers = async (query: Query): Promise<Beer[]> => {
  const { data } = await client.get(`/${encodeQury(query)}`);
  const beers = await ApiBeers.parseAsync(data);
  const mappedBeers = mapBeers(beers);
  return mappedBeers;
};

export const getBeer = async (id: BeerId): Promise<Beer | null> => {
  const { data } = await client.get(`/${id}`);
  const beer = await ApiBeer.optional().parseAsync(data?.[0]);
  if (beer == null) return null;
  return mapBeer(beer);
};
