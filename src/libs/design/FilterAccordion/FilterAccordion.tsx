import { Accordion, Stack } from '@mantine/core';
import { useCallback, useMemo } from 'react';

import { Filter } from './Filter';
import { FilterAccordionContext } from './FilterAccordionContext';

interface Props {
  title: string;
  id: string;
  value?: string;
  open?: boolean;
  loading: boolean;
  onChange?: (value: string | null) => void;
  children: React.ReactNode;
}

export const FilterAccordion = ({
  onChange,
  id,
  title,
  value,
  loading,
  children,
  open = false,
}: Props) => {
  const setValue = useCallback(
    (val: string) => {
      onChange?.(val === value ? null : val);
    },
    [onChange, value],
  );

  const ctx = useMemo(
    (): FilterAccordionContext => ({
      setValue,
      loading,
      currentValue: value,
    }),
    [setValue, loading, value],
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
