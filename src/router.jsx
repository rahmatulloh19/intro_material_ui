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
        element: <Login />,
      },
      {
        path: "/sign-up",
        index: true,
        element: <Register />,
      },
      {
        path: "/client",
        index: true,
        element: <Client />,
      },
      {
        path: "/admin",
        index: true,
        element: <Admin />,
      },
    ],
  },
]);
