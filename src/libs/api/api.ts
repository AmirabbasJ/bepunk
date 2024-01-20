import axios from 'axios';
import type { Primitive } from 'zod';

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

const encodeQury = ({ filter, page, limit, ids }: Query) =>
  `?${page ? `page=${page}` : ''}${limit ? `&per_page=${limit}` : ''}${filter?.food ? `&food=${filter.food}` : ''}${ids == null ? '' : `&ids=${ids.join('|')}`}`;

export const getBeers = async (
  query: Query,
): Promise<{ beers: Beer[]; next: number | undefined }> => {
  const { data } = await client.get(`/${encodeQury(query)}`);

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
