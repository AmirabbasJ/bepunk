const SortType = {
  Asc: 'asc',
  Des: 'des',
} as const;

type SortType = (typeof SortType)[keyof typeof SortType];

interface Config<T> {
  by: T;
  type: SortType;
}

export const sort = <T extends string, K>(
  data: Record<T, K>[],
  { by, type }: Config<T>,
): Record<T, K>[] => {
  const d = [...data];
  d.sort((first, second) => {
    const a = type === 'asc' ? first : second;
    const b = type === 'asc' ? second : first;
    return a[by] < b[by] ? -1 : a[by] === b[by] ? 0 : 1;
  });
  return d;
};
