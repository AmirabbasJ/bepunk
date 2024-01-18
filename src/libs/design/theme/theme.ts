import { createTheme } from '@mantine/core';

import { font } from './font';

export const theme = createTheme({
  fontFamily: font.style.fontFamily,
  headings: {
    fontFamily: font.style.fontFamily,
  },
});
