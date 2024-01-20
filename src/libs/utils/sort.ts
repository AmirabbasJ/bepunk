import { chunkOf } from './chunkOf';

export const SortType = {
  Asc: 'asc',
  Des: 'des',
} as const;

type SortType = (typeof SortType)[keyof typeof SortType];

interface Config {
  by: string;
  type: SortType;
}

export const sort = <T extends Record<string, any>>(
  data: T[][],
  { by, type }: Config,
): T[][] => {
  const chunks = data.length;
  const d = data.flat();
  d.sort((first, second) => {
    const a = type === 'asc' ? first : second;
    const b = type === 'asc' ? second : first;
    return a[by] < b[by] ? -1 : a[by] === b[by] ? 0 : 1;
  });
  return chunkOf(d, chunks);
};
