import {
  usePathname,
  useSearchParams as useNextSearchParams,
} from 'next/navigation';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

type SearchParam = Record<string, string[] | string>;

const getSearchParams = (urlParams: URLSearchParams): SearchParam => {
  const values: SearchParam = {};

  // eslint-disable-next-line fp/no-loops
  for (const [key, value] of urlParams) {
    values[key] = JSON.parse(value);
  }

  return values;
};

export const useSearchParams = () => {
  const searchParams = useNextSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const addSearchParam = useCallback(
    (data: SearchParam) => {
      if (searchParams == null || pathname == null) return null;
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(data).forEach(([key, value]) => {
        params.set(key, JSON.stringify(value));
      });
      return router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams],
  );

  const data = getSearchParams(new URLSearchParams(searchParams?.toString()));

  return { addSearchParam, searchParams: data };
};
