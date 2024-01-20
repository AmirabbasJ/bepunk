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
  ids?: BeerId[] | null;
  limit?: number;
  filter?: Filter;
}
const encode = (
  key: string,
  value: any[] | boolean | number | string | null | undefined,
): string =>
  Array.isArray(value)
    ? `${key}=${value.join('|')}`
    : value == null
      ? ''
      : `${key}=${value.toString()}`;

const encodeQury = ({ filter, page, limit, ids }: Query) =>
  [
    '?',
    encode('page', page),
    encode('per_page', limit),
    encode('food', filter?.food),
    encode('ids', ids),
  ]
    .filter(t => t !== '')
    .join('&');

export const getBeers = async (
  query: Query,
): Promise<{ beers: Beer[]; next: number | undefined }> => {
  const { data } = await client.get(`/${encodeQury(query)}`);
  console.log(encodeQury(query));

  const beers = await ApiBeers.parseAsync(data);
  const mappedBeers = mapBeers(beers);
  const withPage = query.page != null;
  const isLastPage = beers.length === 0;

  return {
    beers: mappedBeers,
    next: isLastPage || !withPage ? undefined : query.page! + 1,
  };
};

export const getBeer = async (id: BeerId): Promise<Beer | null> => {
  const { data } = await client.get(`/${id}`);
  const beer = await ApiBeer.optional().parseAsync(data?.[0]);
  if (beer == null) return null;
  return mapBeer(beer);
};
