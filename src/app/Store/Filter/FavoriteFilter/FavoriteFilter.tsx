import { rem, Switch } from '@mantine/core';
import { IconStarFilled, IconStarOff } from '@tabler/icons-react';

import { useFilter } from '@/filter';

export const FavoriteFilter = () => {
  const { addFilter, loading, filter } = useFilter();

  return (
    <Switch
      disabled={loading}
      checked={filter.favorites}
      size="md"
      onChange={e => {
        addFilter({
          favorites: e.currentTarget.checked,
        });
      }}
      onLabel={
        <IconStarFilled
          style={{ width: rem(16), height: rem(16) }}
          stroke={2.5}
        />
      }
      offLabel={
        <IconStarOff style={{ width: rem(16), height: rem(16) }} stroke={2.5} />
      }
      label="Favorites"
    />
  );
};
