import { Link, useRouteLoaderData } from "react-router-dom";
import { Card, CardHeader } from "./components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "./components/ui/separator";
import BlogData from "./BlogData";
import { badgeVariants } from "./components/ui/badge";

export default function Blog() {
  const loaderData = useRouteLoaderData("blog") as BlogData;

  const tags = loaderData?.tags.map((v) => (
    <Link
      to={"/blog/tags/" + v}
      key={v}
      className={badgeVariants({ variant: "outline" })}
    >
      {v}
    </Link>
  ));

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
      <div className="mb-4">
        <h2 className="text-2xl font-semibold py-2">Tags</h2>
        {tags}
      </div>
      <Separator />
      <ul className="mt-4 flex flex-col gap-4">{posts}</ul>
    </div>
  );
}
