import type { CardProps } from '@mantine/core';
import { ActionIcon, Card, Image, Stack, Text } from '@mantine/core';
import { IconStar, IconStarFilled } from '@tabler/icons-react';

import type { Beer } from '@/domain';

import { openBeerDetailModal } from '../BeerDetail';
import { BeerImage } from '../BeerImage';
import { FavoriteButton } from '../FavoriteButton';

interface Props extends CardProps {
  beer: Beer;
}

export const BeerCard = ({ beer, ...rest }: Props) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      h="100%"
      withBorder
      bg="gray.1"
      style={{ cursor: 'pointer', userSelect: 'none' }}
      onClick={() => openBeerDetailModal(beer)}
      {...rest}
    >
      <Card.Section>
        <Stack align="end" pt="sm" pr="sm">
          <FavoriteButton isFavorie={beer.isFavorite} />
        </Stack>
      </Card.Section>
      <Stack gap="sm" align="center" justify="space-between" h="100%">
        <Text>{beer.name}</Text>
        <BeerImage src={beer.picture} />
        <Text size="sm" c="dimmed">
          {beer.tagline}
        </Text>
      </Stack>
    </Card>
  );
};
