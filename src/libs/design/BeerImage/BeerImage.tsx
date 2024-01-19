import type { ImageProps } from '@mantine/core';
import { Center, Image, Skeleton } from '@mantine/core';
import type { ImageProps as NextImageProps } from 'next/image';
import NextImage from 'next/image';
import { useState } from 'react';

const fallbackImage = '/placeholder.png';

type Props = Omit<ImageProps & NextImageProps, 'alt'> & { alt?: string };

export const BeerImage = ({ src, width = 0, height = 0, ...rest }: Props) => {
  const [loading, setLoading] = useState(true);
  return (
    <Skeleton miw={width} mih={height} visible={loading}>
      <Center miw={width} mih={height}>
        <Image
          loading="lazy"
          onLoad={() => setLoading(false)}
          component={NextImage}
          src={src ?? fallbackImage}
          width={width}
          height={0}
          alt="beer"
          style={{ width: 'auto', height: 'auto' }}
          {...rest}
        />
      </Center>
    </Skeleton>
  );
};
