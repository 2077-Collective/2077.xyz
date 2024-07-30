import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import Blog from "./pages/Blog.tsx";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "@fontsource-variable/manrope";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import Root, { ErrorElement } from "./Root.tsx";
import BlogPost from "./components/BlogPostDisplay.tsx";
import TagPosts from "./pages/Tag.tsx";
import About from "./pages/About.tsx";
import Values from "./pages/Values.tsx";
import Support from "./pages/Support.tsx";
import Projects from "./pages/Projects.tsx";
import { CategoryList } from "./components/projects/CategoryList.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Root>
        <Outlet />
      </Root>
    ),
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/values",
        element: <Values />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/category-eips",
        element: <CategoryList Category="EIPs" maxDisplay={4} />,
      },
      {
        path: "/support",
        element: <Support />,
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
            throw new Response(res.statusText, { status: res.status });
          }
        },
        children: [
          { index: true, element: <Blog /> },
          {
            path: "tags/:tag",
            element: <TagPosts />,
          },
          {
            path: ":slug",
            element: <BlogPost />,
            loader: async ({ params }) => {
              const res = await fetch(
                "https://raw.githubusercontent.com/2077-Collective/blog/master/data.json"
              );
              if (!res.ok) {
                throw new Response(res.statusText, { status: res.status });
              }
              const body = await res.json();
              const file = body.posts.find(
                ({ slug }: { slug: string }) => slug == params["slug"]
              )?.file;

              if (!file) {
                throw new Response("Blog post not found", { status: 404 });
              }
              const r = await fetch(
                "https://raw.githubusercontent.com/2077-Collective/blog/master/" +
                  file
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
