import React from "react";
import Info from "./Info";
import { Link } from "react-router-dom";

export default function Showcase({
  src,
  text,
  source,
  link,
}: {
  src: string;
  text: string;
  source: string;
  link: string;
}) {
  return (
    <Link to={`/projects/:showcase`} className="p-2 mx-auto">
      <img
        src={src}
        width={250}
        className="border-[1px] rounded-md border-gray-600"
      />
      <Info text={text} source={source} link={link} />
    </Link>
  );
}
