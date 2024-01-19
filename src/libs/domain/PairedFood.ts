export const pairedFood = {
  pizza: 'pizza',
  steak: 'steak',
} as const;

export type PairedFood = (typeof pairedFood)[keyof typeof pairedFood];
export const pairedFoods = Object.values(pairedFood) as PairedFood[];
