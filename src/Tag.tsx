import { Link, useParams, useRouteLoaderData } from "react-router-dom";
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
import BlogCard from "./BlogCard";

export default function TagPosts() {
  const loaderData = useRouteLoaderData("blog") as BlogData;
  const { tag } = useParams();

  const tags = loaderData?.tags.map((v) => (
    <Link
      to={"/blog/tags/" + v}
      key={v}
      className={badgeVariants({ variant: "outline" })}
    >
      {v}
    </Link>
  ));

  const posts = tag
    ? loaderData?.posts
        ?.sort(({ time: t1 }, { time: t2 }) => {
          return t1 > t2 ? 1 : -1;
        })
        .filter((value) => value.tags.includes(tag))
        .map((value) => {
          return (
            <li key={value.slug}>
              <BlogCard
                name={value.title}
                time={value.time}
                author={value.author}
                tags={value.tags}
                slug={value.slug}
              />
            </li>
          );
        })
    : null;

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
            <BreadcrumbLink asChild>
              <Link to="/blog">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{tag}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-4xl font-semibold py-4">Blog</h1>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold py-2">See other tags</h2>
        {tags}
      </div>
      <Separator />
      <ul className="mt-4 flex flex-col gap-4">{posts}</ul>
    </div>
  );
}
