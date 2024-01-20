import { Card, Center, Loader, Title } from '@mantine/core';

import { useBeers, useCart } from '@/api';
import { useCartCache, useFavoriteCache } from '@/cache';

import { openBeerDetailModal } from '../../Beer';
import { CartItem } from './CartItem';

const Loading = () => (
  <Center>
    <Loader type="dots" size="xl" />
  </Center>
);

export const CartItems = () => {
  const { updateFavorites } = useFavoriteCache();
  const { data: cart, loading } = useCart();
  console.log(cart);

  if (loading) return <Loading />;
  if (cart.length === 0) return <Title>Nothing to show</Title>;
  const beers = cart;
  return (
    <Card withBorder>
      {beers.map(beer => {
        return (
          <Card.Section key={beer.id} withBorder>
            <CartItem
              onClick={() => {
                openBeerDetailModal({ id: beer.id });
              }}
              beer={beer}
              onFavoriteToggle={() => updateFavorites(beer.id)}
            />
          </Card.Section>
        );
      })}
    </Card>
  );
};
