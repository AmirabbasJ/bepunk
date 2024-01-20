import { ActionIcon, Button, Group } from '@mantine/core';
import { IconHome, IconShoppingCart } from '@tabler/icons-react';

export const Navbar = () => {
  return (
    <Group h="100%" px="md">
      <Button component="a" href="/" leftSection={<IconHome />} variant="light">
        Home
      </Button>
      <ActionIcon
        component="a"
        href="/cart"
        color="green"
        variant="light"
        size="lg"
      >
        <IconShoppingCart />
      </ActionIcon>
    </Group>
  );
};
