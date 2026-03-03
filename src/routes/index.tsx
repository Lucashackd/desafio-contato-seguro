import { createBrowserRouter } from "react-router";
import AppLayout from "../layout/AppLayout";
import BooksLayout from "../layout/BooksLayout";
import AuthorsLayout from "../layout/AuthorsLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <BooksLayout /> },
      { path: "/livros", element: <BooksLayout /> },
      { path: "/autores", element: <AuthorsLayout /> },
    ],
  },
]);
