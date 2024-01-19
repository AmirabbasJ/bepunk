import type { CheckboxProps } from '@mantine/core';
import { Checkbox } from '@mantine/core';
import { useContext } from 'react';

import { FilterAccordionContext } from './FilterAccordionContext';

interface Props extends CheckboxProps {
  value: string;
  label: string;
}

export const Filter = ({ value, label, ...rest }: Props) => {
  const ctx = useContext(FilterAccordionContext);
  if (ctx == null)
    throw new Error('Filter cannot be used outside FilterAccordion component');

  const { setValue, currentValue, loading } = ctx;
  console.log({ loading });

  return (
    <Checkbox
      disabled={loading}
      label={label}
      checked={value === currentValue}
      onChange={() => {
        setValue(value);
      }}
      {...rest}
    />
  );
};
