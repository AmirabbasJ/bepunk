import { useQuery, useQueryClient } from 'react-query';

import { useCartCache } from '@/cache';
import type { Beer, BeerId } from '@/domain';

import { getBeers } from '../api';

export const useCart = () => {
  const {
    cart: cartIds,
    addToCart,
    removeFromCart: removeFromCartCache,
  } = useCartCache();

  const key = ['beers', 'list', cartIds.length !== 0];

  const { data: cart = [], isLoading } = useQuery({
    queryKey: key,
    queryFn: () => getBeers({ ids: cartIds }),
    select: d => d.beers,
  });

  const queryClient = useQueryClient();

  const removeFromCart = (id: BeerId) => {
    queryClient.setQueryData(key, (old?: { beers: Beer[]; next?: number }) => ({
      ...old,
      beers: old?.beers.filter(b => b.id !== id) ?? [],
    }));
    removeFromCartCache(id);
  };

  const totalPrice = cart.reduce((acc, curr) => curr.price + acc, 0);
  return {
    totalPrice,
    addToCart,
    removeFromCart,
    data: cart,
    loading: isLoading,
  };
};
