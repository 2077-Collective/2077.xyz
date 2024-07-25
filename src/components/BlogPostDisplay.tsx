import { useLoaderData, useRouteLoaderData } from "react-router";
import { Link, useParams } from "react-router-dom";
import Markdown from "react-markdown";
import BlogData from "../pages/react/BlogData";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "./ui/breadcrumb";

export default function BlogPost() {
  // i'm gonna use it later
  const rootLoaderData = useRouteLoaderData("blog") as BlogData;
  const { slug } = useParams();
  const myData = rootLoaderData.posts.find(({ slug: s }) => slug == s);
  const loaderData = useLoaderData() as string;
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
            <BreadcrumbPage>{myData?.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <article className="mt-4">
        <Markdown className="prose dark:prose-invert">{loaderData}</Markdown>
      </article>
    </div>
  );
}
