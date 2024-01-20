import { createContext, useContext } from 'react';
import { z } from 'zod';

import { BeerId } from '@/domain';

import type { Cache } from './useCache';
import { useCache } from './useCache';

const cartCacheId = 'cart';
const cartValidator = z.array(BeerId);

type Cart = BeerId[];
type CartCacheCtxProps = Cache<Cart>;
const CartCacheCtx = createContext<CartCacheCtxProps | null>(null);

interface Props {
  children: React.ReactNode;
}

export const CartCacheProvider = ({ children }: Props) => {
  const cache = useCache({
    name: cartCacheId,
    expireAfterDays: 7,
    validator: cartValidator,
  });

  return (
    <CartCacheCtx.Provider value={cache}>{children}</CartCacheCtx.Provider>
  );
};

export const useCartCache = () => {
  const ctx = useContext(CartCacheCtx);
  if (ctx == null) throw new Error('CartCacheProvider is missing');

  const { data, setData } = ctx;
  const cart = data ?? [];

  const addToCart = (id: BeerId) => {
    const newCart = cart.includes(id) ? cart : [...cart, id];
    setData(newCart);
  };

  const removeFromCart = (id: BeerId) => {
    setData(cart.filter(i => i !== id));
  };

  return { cart, addToCart, removeFromCart };
};
