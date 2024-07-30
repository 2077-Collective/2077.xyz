import React from "react";
import { CategoryList } from "./CategoryList";
import { Link } from "react-router-dom";

export default function Categories({ description }: { description: string }) {
  return (
    <div>
      <div className="flex justify-between">
        <h2>{description}</h2>
        <Link to={`/category-eips`}>View All</Link>
      </div>
      <CategoryList Category="EIPs" maxDisplay={4} />
    </div>
  );
}
