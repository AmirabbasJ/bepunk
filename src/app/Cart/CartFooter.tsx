import { Button, Group, NumberFormatter, Title } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';

import { useCart } from '@/api';
import { Loading } from '@/design';

export const CartFooter = () => {
  const { totalPrice, loading } = useCart();

  return (
    <Group align="center" justify="space-between" h="100%" px="md">
      <Group>
        <Title>Price:</Title>{' '}
        {loading ? (
          <Loading />
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
