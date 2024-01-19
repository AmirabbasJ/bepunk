import { Grid } from '@mantine/core';

import { useBeers } from '@/api';
import { BeerCard } from '@/design';

import { StoreLayout } from './StoreLayout';

export const Store = () => {
  const { data } = useBeers();
  return (
    <StoreLayout>
      <Grid>
        {data.map(beer => {
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
