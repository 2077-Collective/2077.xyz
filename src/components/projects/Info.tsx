import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ArrowBigRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Info({
  text,
  source,
  link,
}: {
  text: string;
  source: string;
  link: string;
}) {
  return (
    <div className="flex justify-between p-2 group">
      <div className="flex flex-col">
        <span>{text}</span>
        <span>{source}</span>
      </div>
      <Link to={link} className="hidden group-hover:block">
        <ArrowRightIcon />
      </Link>
    </div>
  );
}
