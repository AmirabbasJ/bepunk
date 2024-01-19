import { createContext } from 'react';

export interface FilterAccordionContext {
  addValue: (value: string) => void;
  unsetValue: (value: string) => void;
  values: string[];
}

export const FilterAccordionContext =
  createContext<FilterAccordionContext | null>(null);
