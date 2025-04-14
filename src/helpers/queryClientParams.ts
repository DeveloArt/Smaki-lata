import { QueryClient } from "@tanstack/query-core";

export const queryClientParams = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24,
      staleTime: 1000 * 60 * 15,
    },
  },
});
