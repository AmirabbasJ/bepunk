type ParedFood = 'none' | 'pizza' | 'snack';

export interface Beer {
  id: number;
  picture: string | null;
  name: string;
  tagline: string;
  paredFood: ParedFood;
  abv: number;
  description: string;
  price: string; // srm
  isFavorite?: boolean;
}

export const pesudoData = [
  {
    id: 1,
    name: 'Buzz',
    tagline: 'A Real Bitter Experience.',
    picture: 'https://images.punkapi.com/v2/keg.png',
  },
  {
    id: 64,
    name: 'Sub Hop',
    tagline: 'Hopped-Up Imperial Pilsner.',
    picture: 'https://images.punkapi.com/v2/64.png',
  },
  {
    id: 52,
    name: 'Paradox Islay',
    tagline: 'Ubiquitous Imperial Stout.',
    picture: 'https://images.punkapi.com/v2/52.png',
  },
  {
    id: 138,
    name: 'Dog A',
    tagline: 'Cacao, Coffee, Chili Imperial Anniversary Stout.',
    picture: 'https://images.punkapi.com/v2/138.png',
  },
  {
    id: 224,
    name: 'AB:20',
    tagline: 'Tiramisu Barley Wine.',
    picture: 'https://images.punkapi.com/v2/224.png',
  },
  {
    id: 314,
    name: 'Manic Mango',
    tagline: 'Mango IPA.',
    picture: null,
  },
] as Beer[];
