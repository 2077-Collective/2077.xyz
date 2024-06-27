import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Blog from "./Blog.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "@remix-run/react";
import "@fontsource-variable/manrope";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import Root from "../root.tsx";
import BlogPost from "./BlogPost.tsx";
import { json } from "stream/consumers";

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
        id: "blog",
        loader: async () => {
          const res = await fetch(
            "https://raw.githubusercontent.com/2077-Collective/blog/master/data.json"
          );
          if (res.ok) {
            const body = await res.json();
            return body;
          } else {
            throw "Error fetching data";
          }
        },
        children: [
          { index: true, element: <Blog /> },
          {
            path: ":post-slug",
            element: <BlogPost />,
            loader: async ({ params }) => {
              const res = await fetch(
                "https://raw.githubusercontent.com/2077-Collective/blog/master/data.json"
              );
              if (!res.ok) {
                throw new Response(res.statusText, { status: res.status });
              }
              const body = await res.json();
              const r = await fetch(
                "https://raw.githubusercontent.com/2077-Collective/blog/master/" +
                  body.posts.find(
                    ({ slug }: { slug: string }) => slug == params["post-slug"]
                  ).file
              );

              return await r.text();
            },
          },
        ],
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
