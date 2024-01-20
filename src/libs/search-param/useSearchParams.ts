import {
  usePathname,
  useSearchParams as useNextSearchParams,
} from 'next/navigation';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import type { Primitive } from 'zod';

type SearchParam = Record<string, Primitive | string | null | undefined>;

const getSearchParams = (urlParams: URLSearchParams): SearchParam => {
  const values: SearchParam = {};

  // eslint-disable-next-line fp/no-loops
  for (const [key, value] of urlParams) {
    values[key] = value;
  }

  return values;
};

export const useSearchParams = () => {
  const searchParams = useNextSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  // NOTE: since we're using nextjs we need to set loading after the first render
  useEffect(() => {
    setLoading(false);
  }, []);

  const addSearchParam = useCallback(
    (data: SearchParam) => {
      if (searchParams == null || pathname == null) return null;
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(data).forEach(([key, value]) => {
        if (value == null) params.delete(key);
        else params.set(key, value.toString());
      });
      return router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams],
  );

  const resetSearchParam = () => {
    if (pathname == null) return null;
    return router.push(pathname);
  };

  const data = getSearchParams(new URLSearchParams(searchParams?.toString()));

  return { addSearchParam, resetSearchParam, searchParams: data, loading };
};
