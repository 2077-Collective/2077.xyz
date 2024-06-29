import { useLoaderData, useRouteLoaderData } from "react-router";
import { Link, useParams } from "react-router-dom";
import Markdown from "react-markdown";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import BlogData from "../pages/BlogData";

export default function BlogPost() {
  // i'm gonna use it later
  const rootLoaderData = useRouteLoaderData("blog") as BlogData;
  const { slug } = useParams();
  const myData = rootLoaderData.posts.find(({ slug: s }) => slug == s);
  const loaderData = useLoaderData() as string;
  return (
    <div className="p-8">
      <Breadcrumbs>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/blog">Blog</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>{myData?.title}</BreadcrumbItem>
      </Breadcrumbs>

      <article className="mt-4">
        <Markdown className="prose dark:prose-invert">{loaderData}</Markdown>
      </article>
    </div>
  );
}
