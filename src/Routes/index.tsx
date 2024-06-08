import { createBrowserRouter } from "react-router-dom";

// Own Pages
import ErrorPage from "../Pages/404";
import HomePage from "../Pages/HomePage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
  ],
  { basename: "/" }
);
