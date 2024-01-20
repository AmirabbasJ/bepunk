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
  limit: number;
  filter: Filter;
}

// NOTE abstract to lib
const encodeQury = ({ filter, page = 1, limit, ids }: Query) =>
  `?page=${page}&per_page=${limit}${filter.food ? `&food=${filter.food}` : ''}${filter.favorites && ids?.length !== 0 ? `&ids=${ids!.join('|')}` : filter.favorites ? `&ids=` : ''}`;

export const getBeers = async (
  query: Query,
): Promise<{ beers: Beer[]; next: number | undefined }> => {
  const { page = 1 } = query;
  const { data } = await client.get(`/${encodeQury(query)}`);
  const beers = await ApiBeers.parseAsync(data);
  const mappedBeers = mapBeers(beers);
  const isLastPage = beers.length === 0;

  return { beers: mappedBeers, next: isLastPage ? undefined : page + 1 };
};

export const getBeer = async (id: BeerId): Promise<Beer | null> => {
  const { data } = await client.get(`/${id}`);
  const beer = await ApiBeer.optional().parseAsync(data?.[0]);
  if (beer == null) return null;
  return mapBeer(beer);
};
