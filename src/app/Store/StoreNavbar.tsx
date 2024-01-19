import { Accordion, Checkbox, Stack, Title } from '@mantine/core';
import { IconMeat, IconPizza } from '@tabler/icons-react';

import type { PairedFood } from '../../libs/domain';
import { pairedFood, pairedFoods } from '../../libs/domain';

const IconMap = {
  [pairedFood.pizza]: IconPizza,
  [pairedFood.steak]: IconMeat,
} as Record<PairedFood, typeof IconMeat>;

export const StoreNavbar = () => {
  return (
    <Stack>
      <Title>Filters</Title>

      <Accordion defaultValue="Apples">
        <Accordion.Item value="food">
          <Accordion.Control>food:</Accordion.Control>
          <Accordion.Panel>
            <Stack gap="xs">
              {pairedFoods.map(food => (
                <Checkbox key={food} icon={IconMap[food]} label={food} />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
};
