import type { ImageProps } from '@mantine/core';
import { Center, Image, Skeleton } from '@mantine/core';
import type { ImageProps as NextImageProps } from 'next/image';
import NextImage from 'next/image';
import { useState } from 'react';

const fallbackImage = '/placeholder.png';

type Props = Omit<ImageProps & NextImageProps, 'alt'> & { alt?: string };

export const BeerImage = ({ src, h, w, ...rest }: Props) => {
  const [loading, setLoading] = useState(true);
  return (
    <Skeleton w="100%" visible={loading}>
      <Center h={h}>
        <Image
          loading="lazy"
          onLoad={() => setLoading(false)}
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
