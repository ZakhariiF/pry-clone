import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

function QueryProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryProvider;
