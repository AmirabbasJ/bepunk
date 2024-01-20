import { createContext, useContext, useMemo } from 'react';
import { z } from 'zod';

import type { BeerId } from '@/domain';

import type { Cache } from './useCache';
import { useCache } from './useCache';

const favoritesCacheId = 'favorites';
const favoritesValidator = z.array(z.number());

type Favorites = BeerId[];
type FavoriteCacheCtxProps = Cache<Favorites>;
const FavoriteCacheCtx = createContext<FavoriteCacheCtxProps | null>(null);

interface Props {
  children: React.ReactNode;
}

export const FavoriteCacheProvider = ({ children }: Props) => {
  const cache = useCache({
    name: favoritesCacheId,
    expireAfterDays: 30,
    validator: favoritesValidator,
  });

  return (
    <FavoriteCacheCtx.Provider value={cache}>
      {children}
    </FavoriteCacheCtx.Provider>
  );
};

export const useFavoriteCache = () => {
  const ctx = useContext(FavoriteCacheCtx);
  if (ctx == null) throw new Error('FavoriteCacheProvider is missing');

  const { data, setData } = ctx;
  const favorites = data ?? [];

  const updateFavorites = (id: number) => {
    console.log({ favorites });

    const newFavorites = favorites.includes(id)
      ? favorites.filter(i => i !== id)
      : [...favorites, id];
    setData(newFavorites);
  };

  return { favorites, updateFavorites };
};
