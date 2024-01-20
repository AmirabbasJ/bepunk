import type { CardProps } from '@mantine/core';
import { Card, Stack, Text } from '@mantine/core';

import type { Beer } from '@/domain';

import { BeerImage } from '../BeerImage';
import { FavoriteButton } from '../FavoriteButton';

interface Props extends CardProps {
  beer: Beer;
  onFavoriteToggle?: () => void;
  onClick?: VoidFunction;
}

export const BeerCard = ({
  beer,
  onFavoriteToggle,
  onClick,
  ...rest
}: Props) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      h="100%"
      withBorder
      bg="gray.0"
      style={{ cursor: 'pointer', userSelect: 'none' }}
      onClick={onClick}
      {...rest}
    >
      <Card.Section>
        <Stack align="end" pt="sm" pr="sm">
          <FavoriteButton
            isFavorie={beer.isFavorite}
            onToggle={onFavoriteToggle}
          />
        </Stack>
      </Card.Section>
      <Stack gap="sm" align="center" justify="space-between" h="100%">
        <Text>{beer.name}</Text>
        <BeerImage width={50} height={250} src={beer.picture} />
        <Text size="sm" c="dimmed">
          {beer.tagline}
        </Text>
      </Stack>
    </Card>
  );
};
