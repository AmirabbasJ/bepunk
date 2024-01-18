import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Center,
  Group,
  Stack,
  Text,
} from '@mantine/core';
import { IconStar } from '@tabler/icons-react';
import Image from 'next/image';

import type { Beer } from '@/domain';

interface Props {
  beer: Beer;
}

export const BeerCard = ({ beer }: Props) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ cursor: 'pointer' }}
    >
      <Card.Section>
        <Stack align="end" p="sm">
          <ActionIcon color="yellow" variant="transparent" radius="md">
            <IconStar />
          </ActionIcon>
        </Stack>
      </Card.Section>
      <Stack gap="sm" align="center">
        <Text>Norway Fjord Adventures</Text>
        <Image
          src={beer.picture}
          width={50}
          height={0}
          alt="Norway"
          style={{ width: 'auto', height: 'auto' }}
        />

        <Text size="sm" c="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>
      </Stack>
    </Card>
  );
};
