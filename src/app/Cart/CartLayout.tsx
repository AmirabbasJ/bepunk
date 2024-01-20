import { AppShell } from '@mantine/core';

import { Navbar } from '../Navbar';

interface Props {
  children: React.ReactNode;
}

export const CartLayout = ({ children }: Props) => {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
