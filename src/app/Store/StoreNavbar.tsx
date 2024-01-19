import { Stack, Title } from '@mantine/core';
import { IconMeat, IconPizza } from '@tabler/icons-react';

import { FilterAccordion } from '@/design';
import type { PairedFood } from '@/domain';
import { pairedFood, pairedFoods } from '@/domain';
import { useFilter } from '@/filter';

const IconMap = {
  [pairedFood.pizza]: IconPizza,
  [pairedFood.steak]: IconMeat,
} as Record<PairedFood, typeof IconMeat>;

export const StoreNavbar = () => {
  const { filter, addFilter } = useFilter();

  return (
    <Stack>
      <Title>Filters</Title>

      <FilterAccordion
        open
        id="food"
        title="Food"
        values={filter.food}
        onChange={foods => {
          addFilter({
            food: foods as PairedFood[],
          });
        }}
      >
        {pairedFoods.map(food => (
          <FilterAccordion.Filter
            value={food}
            key={food}
            icon={IconMap[food]}
            label={food}
          />
        ))}
      </FilterAccordion>
    </Stack>
  );
};
