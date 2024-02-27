import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Admin, Client, Login, Register } from "./pages";

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
            element: <h2>Hello category</h2>,
          },
          {
            path: "products",
            element: <h2>Hello products</h2>,
          },
          {
            path: "orders",
            element: <h2>Hello orders</h2>,
          },
        ],
      },
    ],
  },
]);
