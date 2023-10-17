import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Item from "./pages/Item";
import App from "./App";
import SavedItems from "./pages/SavedItems";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/items",
        element: <Items />,
      },
      {
        path: "/item",
        element: <Item />,
      },
      {
        path: "/saved-items",
        element: <SavedItems />,
      },
    ],
  },
]);

export default router;
