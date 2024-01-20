import {
  Badge,
  Box,
  Button,
  Card,
  Group,
  NumberFormatter,
  Skeleton,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';

import { useBeer } from '@/api';
import { useFavoriteCache } from '@/cache';
import { BeerImage, FavoriteButton } from '@/design';
import type { BeerId } from '@/domain';

export interface BeerDetailProps {
  id: BeerId;
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

export const BeerDetail = ({ id }: BeerDetailProps) => {
  const { data: beer } = useBeer(id);
  const { updateFavorites } = useFavoriteCache();

  if (beer == null) return <Skeleton width="100%" height={530} />;
  return (
    <ResponsiveCard>
      <BeerImage width={135} height={530} src={beer.picture} />
      <Stack gap="xl">
        <Stack gap="xs">
          <Title>
            {beer.name}{' '}
            <FavoriteButton
              isFavorie={beer.isFavorite}
              onToggle={() => updateFavorites(id)}
            />
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
