import { Stack, Title } from '@mantine/core';

import { FavoriteFilter, FoodFilter } from './Filter';
import { Sort } from './Sort';

interface SidebarItemProps {
  title: string;
  children: React.ReactNode;
}
const SidebarItem = ({ title, children }: SidebarItemProps) => (
  <Stack>
    <Title>{title}</Title>
    <Stack>{children}</Stack>
  </Stack>
);

export const StoreSidebar = () => {
  return (
    <Stack gap="xl">
      <SidebarItem title="Sort">
        <Sort />
      </SidebarItem>

      <SidebarItem title="Filters">
        <FoodFilter />
        <FavoriteFilter />
      </SidebarItem>
    </Stack>
  );
};
