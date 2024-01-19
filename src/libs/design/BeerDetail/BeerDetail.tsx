import {
  Badge,
  Box,
  Button,
  Card,
  Group,
  Image,
  NumberFormatter,
  Stack,
  Text,
  ThemeIcon,
  Title,
  Tooltip,
} from '@mantine/core';
import { IconPizza, IconShoppingCart } from '@tabler/icons-react';
import NextImage from 'next/image';
import { useState } from 'react';

import type { Beer } from '@/domain';

import { BeerImage } from '../BeerImage';
import { FavoriteButton } from '../FavoriteButton';

export interface BeerDetailProps {
  beer: Beer;
}

const ResponsiveCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card>
      <Group
        visibleFrom="xs"
        wrap="nowrap"
        align="flex-start"
        justify="flex-start"
        gap="xl"
      >
        {children}
      </Group>
      <Stack hiddenFrom="xs">{children}</Stack>
    </Card>
  );
};

export const BeerDetail = ({ beer }: BeerDetailProps) => {
  return (
    <ResponsiveCard>
      <BeerImage width={135} height={530} src={beer.picture} />
      <Stack gap="xl">
        <Stack gap="xs">
          <Title>
            {beer.name} <FavoriteButton isFavorie={beer.isFavorite} />
            <Text c="dimmed">{beer.tagline}</Text>
          </Title>
          <Group>
            <Badge color="teal" py="sm">
              <Title order={4}>
                <NumberFormatter
                  prefix="$ "
                  value={beer.price}
                  decimalScale={2}
                  fixedDecimalScale
                />
              </Title>
            </Badge>
            <Tooltip
              position="right-start"
              inline
              label="Alcohol by volume"
              withArrow
            >
              <Badge style={{ cursor: 'pointer' }} color="pink" py="sm">
                <Title order={4}>
                  <NumberFormatter
                    suffix="% "
                    value={beer.abv}
                    decimalScale={2}
                    fixedDecimalScale
                  />
                </Title>
              </Badge>
            </Tooltip>
          </Group>
        </Stack>
        <Stack gap="xs">
          <Title order={4}>Description</Title>
          <Text>
            <Text>{beer.description}</Text>
          </Text>
        </Stack>
        <Box>
          <Button leftSection={<IconShoppingCart />} color="green" radius="md">
            Add to cart
          </Button>
        </Box>
      </Stack>
    </ResponsiveCard>
  );
};
