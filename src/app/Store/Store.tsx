import { Center, Grid, Stack, Title } from '@mantine/core';

import type { Beer } from '@/domain';

import { BeerCard } from '../../libs/design/BeerCard/BeerCard';
import { StoreLayout } from './StoreLayout';

const beer = { picture: 'https://images.punkapi.com/v2/192.png' } as Beer;

export const Store = () => {
  return (
    <StoreLayout>
      <Grid>
        <Grid.Col span={3}>
          <BeerCard beer={beer} />
        </Grid.Col>
        <Grid.Col span={3}>
          <BeerCard beer={beer} />
        </Grid.Col>
        <Grid.Col span={3}>
          <BeerCard beer={beer} />
        </Grid.Col>
        <Grid.Col span={3}>
          <BeerCard beer={beer} />
        </Grid.Col>
      </Grid>
    </StoreLayout>
  );
};
