import '@mantine/core/styles.css';

import { ModalsProvider } from '@mantine/modals';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from '@/design';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bepunk</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <ModalsProvider>
            <Component {...pageProps} />
          </ModalsProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
