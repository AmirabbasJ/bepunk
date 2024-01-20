import {
  ActionIcon,
  AppShell,
  Box,
  Burger,
  Button,
  Group,
  Skeleton,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHome } from '@tabler/icons-react';
import Image from 'next/image';

import { CartButton } from '@/design';

import { Navbar } from '../Navbar';

interface Props {
  children: React.ReactNode;
}

export const CartLayout = ({ children }: Props) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
