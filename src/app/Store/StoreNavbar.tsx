import { Stack, Title } from '@mantine/core';

import { FavoriteFilter, FoodFilter } from '../Filter';

export const StoreNavbar = () => {
  return (
    <Stack>
      <Title>Filters</Title>
      <Stack>
        <FoodFilter />
        <FavoriteFilter />
      </Stack>
    </Stack>
  );
};
