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
        index: true,
        element: <Register />,
      },
      {
        path: "/login",
        index: true,
        element: <Login />,
      },
      {
        path: "/admin",
        index: true,
        element: <Admin />,
      },
    ],
  },
]);
