import {
  Center,
  rem,
  SegmentedControl,
  Select,
  Stack,
  Transition,
  VisuallyHidden,
} from '@mantine/core';
import { IconSortAscending, IconSortDescending } from '@tabler/icons-react';

import { sortBy, sortType, useFilter } from '@/filter';

const sortBySelect = {
  abv: { label: 'Abv', value: sortBy.abv },
  name: { label: 'Name', value: sortBy.name },
} as const;

const sortTypeSelect = {
  asc: { label: 'asc', value: sortType.asc },
  des: { label: 'des', value: sortType.des },
} as const;

const iconProps = {
  style: { width: rem(20), height: rem(20), display: 'block' },
  stroke: 1.5,
};

export const Sort = () => {
  const { addFilter, filter } = useFilter();

  return (
    <Stack>
      <Select
        value={filter.sortBy ?? null}
        onChange={item => {
          if (item == null)
            addFilter({
              sortBy: null,
              sortType: null,
            });
          else
            addFilter({
              sortBy: item as any,
              sortType: filter.sortType ?? sortTypeSelect.asc.value,
            });
        }}
        label="Sort by:"
        data={[sortBySelect.abv, sortBySelect.name]}
        placeholder="Sorting"
        clearable
        allowDeselect
      />
      <Transition
        mounted={filter.sortBy != null}
        transition="slide-up"
        duration={300}
        timingFunction="ease"
      >
        {style => (
          <SegmentedControl
            fullWidth
            onChange={v => {
              addFilter({
                sortType: v as any,
              });
            }}
            value={filter.sortType ?? undefined}
            color="blue"
            style={style}
            data={[
              {
                value: sortTypeSelect.asc.value,
                label: (
                  <Center>
                    <IconSortAscending {...iconProps} />
                    <VisuallyHidden>{sortTypeSelect.asc.label}</VisuallyHidden>
                  </Center>
                ),
              },
              {
                value: sortTypeSelect.des.value,
                label: (
                  <Center>
                    <IconSortDescending {...iconProps} />
                    <VisuallyHidden>{sortTypeSelect.des.label}</VisuallyHidden>
                  </Center>
                ),
              },
            ]}
          />
        )}
      </Transition>
    </Stack>
  );
};
