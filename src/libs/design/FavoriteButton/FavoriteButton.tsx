import { ActionIcon } from '@mantine/core';
import { IconStar, IconStarFilled } from '@tabler/icons-react';

interface Props {
  isFavorie?: boolean;
  onToggle?: () => void;
}

export const FavoriteButton = ({ isFavorie = false, onToggle }: Props) => {
  return (
    <ActionIcon
      color="yellow"
      variant="transparent"
      radius="md"
      onClick={e => {
        e.stopPropagation();
        onToggle?.();
      }}
    >
      {isFavorie ? <IconStarFilled /> : <IconStar />}
    </ActionIcon>
  );
};
