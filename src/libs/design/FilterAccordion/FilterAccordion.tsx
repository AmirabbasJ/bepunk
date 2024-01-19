import { Accordion, Stack } from '@mantine/core';
import { useCallback, useMemo } from 'react';

import { Filter } from './Filter';
import { FilterAccordionContext } from './FilterAccordionContext';

interface Props {
  title: string;
  id: string;
  values: string[];
  open?: boolean;
  onChange?: (values: string[]) => void;
  children: React.ReactNode;
}

export const FilterAccordion = ({
  onChange,
  id,
  title,
  values,
  children,
  open = false,
}: Props) => {
  const addValue = useCallback(
    (value: string) => {
      const vals = [...values, value];
      onChange?.(vals);
    },
    [values, onChange],
  );

  const unsetValue = useCallback(
    (value: string) => {
      const vals = values.filter(v => v !== value);
      onChange?.(vals);
    },
    [values, onChange],
  );

  const ctx = useMemo(
    (): FilterAccordionContext => ({
      addValue,
      unsetValue,
      values,
    }),
    [addValue, unsetValue, values],
  );

  return (
    <Accordion defaultValue={open ? id : null}>
      <Accordion.Item value={id}>
        <Accordion.Control>{title}</Accordion.Control>
        <Accordion.Panel>
          <Stack gap="xs">
            <FilterAccordionContext.Provider value={ctx}>
              {children}
            </FilterAccordionContext.Provider>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

FilterAccordion.Filter = Filter;
