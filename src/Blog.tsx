import { Link, useLoaderData, useRouteLoaderData } from "@remix-run/react";
import { Card, CardHeader } from "./components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BlogData {
  posts: {
    slug: string;
    file: string;
    time: number;
    author: string;
    title: string;
  }[];
}
export default function Blog() {
  const loaderData = useRouteLoaderData("blog") as BlogData;

  const posts = loaderData?.posts
    ?.sort(({ time: t1 }, { time: t2 }) => {
      return t1 > t2 ? 1 : -1;
    })
    .map((value) => {
      return (
        <li key={value.slug}>
          <Card>
            <Link to={value.slug}>
              <CardHeader>
                <h2 className="text-xl">{value.title}</h2>
                <p className="text-sm">
                  <b>By {value.author}</b>

                  <span className="ml-4">
                    {new Date(value.time).toLocaleString()}
                  </span>
                </p>
              </CardHeader>
            </Link>
          </Card>
        </li>
      );
    });

  return (
    <div className="p-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Blog</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-4xl font-semibold py-4">Blog</h1>
      <ul className="flex flex-col gap-4">{posts}</ul>
    </div>
  );
}
