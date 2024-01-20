import type { CardProps } from '@mantine/core';
import {
  ActionIcon,
  Badge,
  Card,
  Group,
  NumberFormatter,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';

import { useCart } from '@/api';
import { BeerImage, FavoriteButton } from '@/design';
import type { Beer } from '@/domain';

interface Props extends CardProps {
  beer: Beer;
  onFavoriteToggle?: () => void;
  onClick?: VoidFunction;
}

export const CartItem = ({
  beer,
  onClick,
  onFavoriteToggle,
  ...rest
}: Props) => {
  const { removeFromCart } = useCart();
  return (
    <Card py="xl" {...rest}>
      <Group wrap="nowrap" align="center" justify="flex-start" gap="xl">
        <Stack justify="center" align="center">
          <BeerImage width={50} height={100} src={beer.picture} />
          <ActionIcon
            onClick={() => removeFromCart(beer.id)}
            size="lg"
            w="100%"
            variant="light"
            color="red"
          >
            <IconTrash />
          </ActionIcon>
        </Stack>
        <Stack gap="xl">
          <Stack gap="xs">
            <Title>
              {beer.name}{' '}
              <FavoriteButton
                isFavorie={beer.isFavorite}
                onToggle={onFavoriteToggle}
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
            <Text>{beer.description}</Text>
          </Stack>
        </Stack>
      </Group>
    </Card>
  );
};
