import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from '@/design';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bepunk</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
