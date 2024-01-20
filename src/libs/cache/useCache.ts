import { useEffect, useMemo, useState } from 'react';
import { z } from 'zod';

const Cache = <T>(dataValidator: z.ZodType<T>) =>
  z.object({
    data: dataValidator.nullable(),
    expiary: z.number().gt(new Date().getTime()),
  });

interface Config<T> {
  name: string;
  validator: z.ZodType<T>;
  expireAfterDays: number;
}

export interface Cache<T> {
  data: T | null;
  setData: (d: T) => void;
  reset: VoidFunction;
}

export const useCache = <T>({
  name,
  validator,
  expireAfterDays,
}: Config<T>) => {
  const cacheValidator = useMemo(() => Cache(validator), [validator]);

  const reset = () => {
    localStorage.removeItem(name);
  };

  const getData = (): T | null => {
    const raw = localStorage.getItem(name)!;
    const result = cacheValidator.safeParse(JSON.parse(raw));

    if (!result.success) reset();
    const data = result.success ? result.data.data : null;
    return data ?? null;
  };

  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    setData(getData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCacheData = (newData: T) => {
    localStorage.setItem(
      name,
      JSON.stringify({
        expiary: new Date().getTime() + 1000 * 60 * 60 * 24 * expireAfterDays,
        data: newData,
      }),
    );
    setData(newData);
  };

  return { data, setData: setCacheData, reset };
};
