import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Admin, Category, Client, Login, Orders, Products, Register } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <Client />,
      },
      {
        path: "/sign-up",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admin",
        element: <Admin />,
        children: [
          {
            index: true,
            element: <Category />,
          },
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
        ],
      },
    ],
  },
]);
