import { Stack, Title } from '@mantine/core';

import { FavoriteFilter, FoodFilter } from '../Filter';
import { Sort } from '../Sort';

export const StoreNavbar = () => {
  return (
    <Stack gap="xl">
      <Stack>
        <Title>Sort</Title>
        <Stack>
          <Sort />
        </Stack>
      </Stack>
      <Stack>
        <Title>Filters</Title>
        <Stack>
          <FoodFilter />
          <FavoriteFilter />
        </Stack>
      </Stack>
    </Stack>
  );
};
