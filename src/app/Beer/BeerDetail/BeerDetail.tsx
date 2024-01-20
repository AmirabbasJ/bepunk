import {
  Badge,
  Box,
  Card,
  Group,
  NumberFormatter,
  Skeleton,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';

import { useBeer } from '@/api';
import { useCartCache, useFavoriteCache } from '@/cache';
import { BeerImage, CartButton, FavoriteButton } from '@/design';
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
  const { addToCart, removeFromCart, cart } = useCartCache();
  if (beer == null) return <Skeleton width="100%" height={530} />;

  const isInCart = cart.includes(id);

  return (
    <ResponsiveCard>
      <Box>
        <BeerImage width={135} height={530} src={beer.picture} />
      </Box>
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
          <CartButton
            isAdded={isInCart}
            onClick={() => {
              if (isInCart) removeFromCart(id);
              else addToCart(id);
            }}
          />
        </Box>
      </Stack>
    </ResponsiveCard>
  );
};
