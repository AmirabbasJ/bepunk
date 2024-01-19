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
  Title,
  Tooltip,
} from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';
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
      <Group wrap="nowrap" align="flex-start" justify="flex-start" gap="xl">
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
            <Text>{beer.description}</Text>
          </Stack>
          <Box>
            <Button
              leftSection={<IconShoppingCart />}
              color="green"
              radius="md"
            >
              Add to cart
            </Button>
          </Box>
        </Stack>
      </Group>
    </Card>
  );
};
