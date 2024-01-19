import { Card, Group, Image, Stack, Text, Title } from '@mantine/core';
import NextImage from 'next/image';

import type { Beer } from '@/domain';

import { BeerImage } from '../BeerImage';
import { FavoriteButton } from '../FavoriteButton';

export interface BeerDetailProps {
  beer: Beer;
}

export const BeerDetail = ({ beer }: BeerDetailProps) => {
  return (
    <Card>
      <Group wrap="nowrap" align="start" gap="xl">
        <BeerImage width={135} h={530} src={beer.picture} />
        <Stack>
          <Group>
            <Title>{beer.name}</Title>
            <FavoriteButton isFavorie={beer.isFavorite} />
          </Group>
          <Text>
            The International Arms Race was a new type of battle collaboration
            between hardcore American craft brewery Flying Dog and BrewDog. Both
            breweries attempted to brew an IPA with absolutely no hops.
          </Text>
        </Stack>
      </Group>
    </Card>
  );
};
