import { createBrowserRouter } from "react-router";
import AppLayout from "../layout/AppLayout";
import BooksPage from "../pages/BooksPage";
import AuthorsPage from "../pages/AuthorsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <BooksPage /> },
      { path: "/livros", element: <BooksPage /> },
      { path: "/autores", element: <AuthorsPage /> },
    ],
  },
]);
