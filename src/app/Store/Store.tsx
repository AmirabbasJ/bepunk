import { Grid, Skeleton } from '@mantine/core';

import { useBeers } from '@/api';
import { useFavoriteCache } from '@/cache';
import { BeerCard } from '@/design';
import { useFilter } from '@/filter';

import { openBeerDetailModal } from '../Beer';
import { StoreLayout } from './StoreLayout';

const loadingList = Array.from({ length: 20 }).map((_, i) => (
  <Grid.Col key={i} span={{ sm: 6, md: 4, lg: 3 }}>
    <Skeleton width="100%" h="400px" />
  </Grid.Col>
));

export const Store = () => {
  const { filter } = useFilter();
  const { favorites, updateFavorites } = useFavoriteCache();
  const { data, loading } = useBeers({ filter, ids: favorites });
  return (
    <StoreLayout>
      <Grid>
        {loading
          ? loadingList
          : data.map(beer => {
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
    </StoreLayout>
  );
};
