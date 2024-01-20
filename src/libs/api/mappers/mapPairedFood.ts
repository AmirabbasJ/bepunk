import type { PairedFood } from '@/domain';
import { pairedFoods } from '@/domain';

export const mapPairedFood = (pairedFood: string[]): PairedFood | null =>
  pairedFood.reduce<PairedFood | null>((found, curr) => {
    if (found != null) return found;
    return (
      (pairedFoods.find(food => curr.includes(food)) as PairedFood | null) ??
      null
    );
  }, null);
