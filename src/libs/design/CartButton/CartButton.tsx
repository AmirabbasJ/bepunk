import type { ButtonProps } from '@mantine/core';
import { Button } from '@mantine/core';
import {
  IconShoppingCartMinus,
  IconShoppingCartPlus,
} from '@tabler/icons-react';

interface Props extends ButtonProps {
  onClick?: VoidFunction;
  isAdded?: boolean;
}

export const CartButton = ({ onClick, isAdded }: Props) => {
  return (
    <Button
      onClick={onClick}
      leftSection={
        isAdded ? <IconShoppingCartMinus /> : <IconShoppingCartPlus />
      }
      color={isAdded ? 'red' : 'green'}
      radius="md"
    >
      {isAdded ? 'Remove from cart' : 'Add to cart'}
    </Button>
  );
};
