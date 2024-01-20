import { Center, Grid, Loader, Title } from '@mantine/core';
import { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useBeers } from '@/api';
import { useFavoriteCache } from '@/cache';
import { BeerCard } from '@/design';
import { useFilter } from '@/filter';

import { openBeerDetailModal } from '../Beer';

const perPage = 20;

const Loading = () => (
  <Center>
    <Loader type="dots" size="xl" />
  </Center>
);

export const Products = () => {
  const { filter } = useFilter();
  const { favorites, updateFavorites } = useFavoriteCache();

  const { pages, fetchNextPage, hasNextPage, loading, length } = useBeers({
    filter,
    ids: filter.favorites ? favorites : null,
    perPage,
  });

  if (loading) return <Loading />;
  if (pages.flat().length === 0) return <Title>Nothing to show</Title>;

  return (
    <InfiniteScroll
      dataLength={length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      style={{ overflow: 'hidden' }}
      loader={<Loading />}
    >
      {pages.map((page, i) => (
        <Fragment key={i}>
          <Grid>
            {page.map(beer => {
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
        </Fragment>
      ))}
    </InfiniteScroll>
  );
};
