import { Grid } from '@mantine/core';

import { pesudoData } from '@/domain';

import { BeerCard } from '../../libs/design/BeerCard/BeerCard';
import { StoreLayout } from './StoreLayout';

export const Store = () => {
  return (
    <StoreLayout>
      <Grid>
        {pesudoData.map(beer => {
          return (
            <Grid.Col key={beer.id} span={{ sm: 6, md: 4, lg: 3 }}>
              <BeerCard beer={beer} isFavorite />
            </Grid.Col>
          );
        })}
      </Grid>
    </StoreLayout>
  );
};
