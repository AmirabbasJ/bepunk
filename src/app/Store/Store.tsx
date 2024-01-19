import { Grid, Skeleton } from '@mantine/core';

import { useBeers } from '@/api';
import { BeerCard } from '@/design';
import { useFilter } from '@/filter';

import { StoreLayout } from './StoreLayout';

const loadingList = Array.from({ length: 20 }).map((_, i) => (
  <Grid.Col key={i} span={{ sm: 6, md: 4, lg: 3 }}>
    <Skeleton width="100%" h="400px" />
  </Grid.Col>
));

export const Store = () => {
  const { filter } = useFilter();
  const { data, loading } = useBeers({ filter });
  return (
    <StoreLayout>
      <Grid>
        {loading
          ? loadingList
          : data.map(beer => {
              return (
                <Grid.Col key={beer.id} span={{ sm: 6, md: 4, lg: 3 }}>
                  <BeerCard beer={beer} />
                </Grid.Col>
              );
            })}
      </Grid>
    </StoreLayout>
  );
};
