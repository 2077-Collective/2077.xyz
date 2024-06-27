import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Blog from "./Blog.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource-variable/manrope";
import { ThemeProvider } from "@/components/theme-provider";
import Root from "./Root.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
