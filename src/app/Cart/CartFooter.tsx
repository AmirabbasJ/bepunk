import { Button, Group, Loader, NumberFormatter, Title } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';

import { useCart } from '@/api';

export const CartFooter = () => {
  const { totalPrice, loading } = useCart();

  return (
    <Group align="center" justify="space-between" h="100%" px="md">
      <Group>
        <Title>Price:</Title>{' '}
        {loading ? (
          <Loader type="dots" size="xl" />
        ) : (
          <Title c="green">
            <NumberFormatter
              prefix="$ "
              value={totalPrice}
              decimalScale={2}
              fixedDecimalScale
            />
          </Title>
        )}
      </Group>
      <Group>
        <Button
          disabled={totalPrice === 0}
          leftSection={<IconShoppingCart />}
          color="green"
          radius="md"
        >
          Finish and Checkout
        </Button>
      </Group>
    </Group>
  );
};
