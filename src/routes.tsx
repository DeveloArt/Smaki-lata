import {
  Outlet,
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClientParams } from "./helpers/queryClientParams";
import { QueryClientProvider } from "@tanstack/react-query";
import { HomePage } from "./components/pages/HomePage";
import { SignInPage } from "./components/pages/SignInPage";
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClientParams}>
      <Outlet />
      <ReactQueryDevtools />
    </QueryClientProvider>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return <SignInPage />;
  },
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/home",
  component: function Home() {
    return <HomePage />;
  },
});

const routeTree = rootRoute.addChildren([indexRoute, homeRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
