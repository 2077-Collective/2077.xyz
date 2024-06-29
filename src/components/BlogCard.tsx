import { Link } from "react-router-dom";
import { Card, CardHeader, CardFooter } from "./ui/card";
import { badgeVariants } from "./ui/badge";

export default function BlogCard({
  name,
  author,
  slug,
  time,
  tags,
}: {
  name: string;
  author: string;
  slug: string;
  time: number;
  tags: string[];
}) {
  const t = tags.map((v: string) => (
    <Link
      to={"/blog/tags/" + v}
      key={v}
      className={badgeVariants({ variant: "outline" })}
    >
      {v}
    </Link>
  ));
  return (
    <Card>
      <Link to={slug}>
        <CardHeader>
          <h2 className="text-xl">{name}</h2>
          <p className="text-sm">
            <b>By {author}</b>

            <span className="ml-4">{new Date(time).toLocaleString()}</span>
          </p>
        </CardHeader>
        <CardFooter>
          <div className="flex flex-row">{t}</div>
        </CardFooter>
      </Link>
    </Card>
  );
}
