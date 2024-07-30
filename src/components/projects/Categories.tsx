import React from "react";
import {
  EIPCategoryList,
  showcaseArr,
} from "./categoryList/EIPCategoryList/EIPCategoryList";
import { Link } from "react-router-dom";
import Showcase from "./Showcase";

export default function Categories({ description }: { description: string }) {
  const iterate = 4;
  return (
    <div className="p-4">
      <div className="flex justify-between p-4">
        <h2>{description}</h2>
        <Link to={`/eip-categories`}>View All</Link>
      </div>
      <div className="flex">
        {showcaseArr.map((item, index) => {
          if (index < iterate) {
            return (
              <Showcase
                key={index}
                src={item.src}
                text={item.text}
                source={item.source}
                link={item.link}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
