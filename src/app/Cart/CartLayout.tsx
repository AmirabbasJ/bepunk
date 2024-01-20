import { AppShell } from '@mantine/core';

import { Navbar } from '../Navbar';
import { CartFooter } from './CartFooter';

interface Props {
  children: React.ReactNode;
}

export const CartLayout = ({ children }: Props) => {
  return (
    <AppShell header={{ height: 60 }} footer={{ height: 80 }} padding="md">
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer>
        <CartFooter />
      </AppShell.Footer>
    </AppShell>
  );
};
