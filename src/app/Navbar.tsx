import { ActionIcon, Button, Group, Indicator } from '@mantine/core';
import { IconHome, IconShoppingCart } from '@tabler/icons-react';

import { useCartCache } from '@/cache';

export const Navbar = () => {
  const { cart: ids } = useCartCache();
  const cartItemsCount = ids.length;
  return (
    <Group h="100%" px="md">
      <Button component="a" href="/" leftSection={<IconHome />} variant="light">
        Home
      </Button>
      <Indicator
        position="top-end"
        color="teal"
        offset={2}
        disabled={cartItemsCount === 0}
        size={15}
        label={cartItemsCount}
      >
        <ActionIcon
          component="a"
          href="/cart"
          color="green"
          variant="light"
          size="lg"
        >
          <IconShoppingCart />
        </ActionIcon>
      </Indicator>
    </Group>
  );
};
