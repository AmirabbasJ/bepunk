import { MantineProvider } from '@mantine/core';

import { theme } from './theme';

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = (props: Props) => {
  return <MantineProvider theme={theme} {...props} />;
};
