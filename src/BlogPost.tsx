import { useLoaderData, useRouteLoaderData } from "react-router";
import Markdown from "react-markdown";

export default function BlogPost() {
  const loaderData = useLoaderData() as string;
  return (
    <article>
      <Markdown className="prose dark:prose-invert p-4">{loaderData}</Markdown>
    </article>
  );
}
