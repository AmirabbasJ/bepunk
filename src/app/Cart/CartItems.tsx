import { Center, Grid, Loader, Title } from '@mantine/core';
import { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useBeers } from '@/api';
import { useCartCache, useFavoriteCache } from '@/cache';
import { BeerCard } from '@/design';
import { useFilter } from '@/filter';

import { openBeerDetailModal } from '../Beer';

const perPage = 20;

const Loading = () => (
  <Center>
    <Loader type="dots" size="xl" />
  </Center>
);

export const CartItems = () => {
  const { updateFavorites } = useFavoriteCache();
  const { cart } = useCartCache();

  const { pages, loading } = useBeers({
    ids: cart,
  });
  console.log(pages);

  if (loading) return <Loading />;
  if (pages.flat().length === 0) return <Title>Nothing to show</Title>;
  const beers = pages.flat();
  return (
    <Grid>
      {beers.map(beer => {
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
  );
};
