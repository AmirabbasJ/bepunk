import type { ImageProps } from '@mantine/core';
import { Center, Image, Skeleton } from '@mantine/core';
import type { ImageProps as NextImageProps } from 'next/image';
import NextImage from 'next/image';

const fallbackImage = '/placeholder.png';

type Props = Omit<ImageProps & NextImageProps, 'alt'> & { alt?: string };

export const BeerImage = ({ src, h, w, ...rest }: Props) => {
  return (
    <Skeleton height="auto" visible={false} w="100%">
      <Center h={h}>
        <Image
          component={NextImage}
          src={src ?? fallbackImage}
          width={50}
          height={0}
          alt="beer"
          style={{ width: 'auto', height: 'auto' }}
          {...rest}
        />
      </Center>
    </Skeleton>
  );
};
