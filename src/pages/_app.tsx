import { AppProps } from "next/app";
import "@/styles/globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClientParams } from "@/helpers/queryClientParams";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClientParams}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
