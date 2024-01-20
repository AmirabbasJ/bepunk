import type { LoaderProps } from '@mantine/core';
import { Center, Loader } from '@mantine/core';

interface Props extends LoaderProps {
  center?: boolean;
}

export const Loading = ({ center = false, ...rest }: Props) => {
  const loader = <Loader type="dots" size="xl" {...rest} />;
  return center ? <Center>{loader}</Center> : loader;
};
