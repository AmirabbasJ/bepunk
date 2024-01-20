import { IconMeat, IconPizza } from '@tabler/icons-react';

import { FilterAccordion } from '@/design';
import type { PairedFood } from '@/domain';
import { pairedFood, pairedFoods } from '@/domain';
import { useFilter } from '@/filter';

const IconMap = {
  [pairedFood.pizza]: IconPizza,
  [pairedFood.steak]: IconMeat,
} as Record<PairedFood, typeof IconMeat>;

export const FoodFilter = () => {
  const { filter, addFilter, loading } = useFilter();

  return (
    <FilterAccordion
      open
      loading={loading}
      id="food"
      title="Food"
      value={filter.food}
      onChange={food => {
        addFilter({
          food: food as PairedFood | undefined,
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
  );
};
