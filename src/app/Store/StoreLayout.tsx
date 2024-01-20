import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { Navbar } from '../Navbar';
import { StoreSidebar } from './StoreSidebar';

interface Props {
  children: React.ReactNode;
}

export const StoreLayout = ({ children }: Props) => {
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
      <AppShell.Navbar p="md">
        <StoreSidebar />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
