import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';

import { showFailureNotifiction } from '@/design';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: () => showFailureNotifiction({ message: "Couldn't load data" }),
  }),
});

interface Props {
  children: React.ReactNode;
}

export const QueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
