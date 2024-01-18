import { ActionIcon, Card, Image, Stack, Text } from '@mantine/core';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import NextImage from 'next/image';

import type { Beer } from '@/domain';

interface Props {
  beer: Beer;
  isFavorite?: boolean;
}

const fallbackImage = '/placeholder.png';

export const BeerCard = ({ beer, isFavorite = false }: Props) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      h="100%"
      withBorder
      bg="gray.1"
      style={{ cursor: 'pointer', userSelect: 'none' }}
    >
      <Card.Section>
        <Stack align="end" pt="sm" pr="sm">
          <ActionIcon color="yellow" variant="transparent" radius="md">
            {isFavorite ? <IconStarFilled /> : <IconStar />}
          </ActionIcon>
        </Stack>
      </Card.Section>
      <Stack gap="sm" align="center" justify="space-between" h="100%">
        <Text>{beer.name}</Text>
        <Image
          component={NextImage}
          src={beer.picture ?? fallbackImage}
          width={50}
          height={0}
          alt="Norway"
          style={{ width: 'auto', height: 'auto' }}
        />

        <Text size="sm" c="dimmed">
          {beer.tagline}
        </Text>
      </Stack>
    </Card>
  );
};
