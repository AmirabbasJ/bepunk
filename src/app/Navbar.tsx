import { ActionIcon, Button, Group, Indicator } from '@mantine/core';
import { IconHome, IconShoppingCart } from '@tabler/icons-react';
import Link from 'next/link';

import { useCartCache } from '@/cache';

interface Props {
  children?: React.ReactNode;
}

export const Navbar = ({ children }: Props) => {
  const { cart: ids } = useCartCache();
  const cartItemsCount = ids.length;
  return (
    <Group h="100%" px="md">
      {children}
      <Button
        component={Link}
        href="/"
        leftSection={<IconHome />}
        variant="light"
      >
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
          component={Link}
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
