export const chunkOf = <T>(x: T[], perChunk: number): T[][] => {
  return x.reduce<T[][]>((acc, curr, i) => {
    const ch = Math.floor(i % perChunk);
    acc[ch] = ([] as T[]).concat(acc[ch] ?? [], curr);
    return acc;
  }, []);
};
