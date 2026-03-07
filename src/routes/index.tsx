import { createBrowserRouter } from "react-router";
import { lazy, Suspense, type ReactNode } from "react";
import RouteFallback from "../components/RouteFallback";

const AppLayout = lazy(() => import("../layout/AppLayout"));
const BooksPage = lazy(() => import("../pages/BooksPage"));
const AuthorsPage = lazy(() => import("../pages/AuthorsPage"));

const withSuspense = (element: ReactNode) => (
  <Suspense fallback={<RouteFallback />}>{element}</Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(<AppLayout />),
    children: [
      { index: true, element: withSuspense(<BooksPage />) },
      { path: "/livros", element: withSuspense(<BooksPage />) },
      { path: "/autores", element: withSuspense(<AuthorsPage />) },
    ],
  },
]);
