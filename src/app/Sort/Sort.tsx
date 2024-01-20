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

import { useFilter } from '../../libs/filter';

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
              sortType: filter.sortType ?? 'asc',
            });
        }}
        label="Sort by:"
        data={[
          { label: 'Abv', value: 'abv' },
          { label: 'Name', value: 'name' },
        ]}
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
                value: 'asc',
                label: (
                  <Center>
                    <IconSortAscending {...iconProps} />
                    <VisuallyHidden>asc</VisuallyHidden>
                  </Center>
                ),
              },
              {
                value: 'des',
                label: (
                  <Center>
                    <IconSortDescending {...iconProps} />
                    <VisuallyHidden>des</VisuallyHidden>
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
