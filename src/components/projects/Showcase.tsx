import React from "react";
import Info from "./Info";

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
    <div className="mx-auto flex flex-col">
      <img
        src={src}
        width={250}
        className="border-[1px] rounded-md border-gray-600"
      />
      <Info text={text} source={source} link={link} />
    </div>
  );
}
