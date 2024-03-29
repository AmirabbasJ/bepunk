import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { QueryProvider } from '@/api';
import { CartCacheProvider, FavoriteCacheProvider } from '@/cache';
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
        <QueryProvider>
          <FavoriteCacheProvider>
            <CartCacheProvider>
              <ModalsProvider>
                <Notifications position="bottom-left" />
                <Component {...pageProps} />
              </ModalsProvider>
            </CartCacheProvider>
          </FavoriteCacheProvider>
        </QueryProvider>
      </ThemeProvider>
    </>
  );
}
