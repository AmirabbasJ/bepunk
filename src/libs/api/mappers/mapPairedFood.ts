import type { PairedFood } from '@/domain';
import { pairedFoods } from '@/domain';

export const mapPairedFood = (pairedFood: string[]): PairedFood =>
  pairedFood.reduce<PairedFood>((found, curr) => {
    if (found !== 'none') return found;
    return (
      (pairedFoods.find(food => curr.includes(food)) as PairedFood | null) ??
      'none'
    );
  }, 'none');
