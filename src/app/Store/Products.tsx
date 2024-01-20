import { Grid, Title } from '@mantine/core';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useBeers } from '@/api';
import { useFavoriteCache } from '@/cache';
import { BeerCard, Loading } from '@/design';
import { useFilter } from '@/filter';

import { openBeerDetailModal } from '../Beer';

const perPage = 20;

export const Products = () => {
  const { filter } = useFilter();
  const { favorites, updateFavorites } = useFavoriteCache();

  const { beers, fetchNextPage, hasNextPage, loading, length } = useBeers({
    filter,
    ids: filter.favorites ? favorites : null,
    perPage,
  });

  if (loading) return <Loading center />;
  if (beers.flat().length === 0) return <Title>Nothing to show</Title>;

  return (
    <InfiniteScroll
      dataLength={length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      style={{ overflow: 'hidden' }}
      loader={<Loading center />}
    >
      <Grid>
        {beers.flat().map(beer => {
          return (
            <Grid.Col key={beer.id} span={{ sm: 6, md: 4, lg: 3 }}>
              <BeerCard
                onClick={() => {
                  openBeerDetailModal({ id: beer.id });
                }}
                beer={beer}
                onFavoriteToggle={() => updateFavorites(beer.id)}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </InfiniteScroll>
  );
};
