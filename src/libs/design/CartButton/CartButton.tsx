import { ActionIcon } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';

export const CartButton = () => {
  return (
    <ActionIcon color="green" variant="subtle" size="lg">
      <IconShoppingCart />
    </ActionIcon>
  );
};
