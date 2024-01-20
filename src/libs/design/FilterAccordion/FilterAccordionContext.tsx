import { createContext } from 'react';

export interface FilterAccordionContext {
  setValue: (value: string) => void;
  currentValue?: string;
  loading: boolean;
}

export const FilterAccordionContext =
  createContext<FilterAccordionContext | null>(null);
