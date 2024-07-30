import { Separator } from "@radix-ui/react-separator";
import React from "react";
import Showcase from "./Showcase";

interface CategoryListProps {
  Category: string;
  id?: number;
  src?: string;
  text?: string;
  source?: string;
  link?: string;
  maxDisplay: number;
}
export const showcaseArr = [
  {
    id: 1,
    src: "https://img.freepik.com/free-vector/flat-design-staking-illustration_23-2149402202.jpg?ga=GA1.1.1643460944.1721044067&semt=ais_hybrid",
    text: "Ethereum Blockchain",
    source: "Freepik",
    link: "https://www.ethereum.org",
  },
  {
    id: 2,
    src: "https://img.freepik.com/free-vector/flat-design-staking-illustration_23-2149402202.jpg?ga=GA1.1.1643460944.1721044067&semt=ais_hybrid",
    text: "Ethereum Blockchain",
    source: "Freepik",
    link: "https://www.ethereum.org",
  },
  {
    id: 3,
    src: "https://img.freepik.com/free-vector/flat-design-staking-illustration_23-2149402202.jpg?ga=GA1.1.1643460944.1721044067&semt=ais_hybrid",
    text: "Ethereum Blockchain",
    source: "Freepik",
    link: "https://www.ethereum.org",
  },
  {
    id: 4,
    src: "https://img.freepik.com/free-vector/flat-design-staking-illustration_23-2149402202.jpg?ga=GA1.1.1643460944.1721044067&semt=ais_hybrid",
    text: "Ethereum Blockchain",
    source: "Freepik",
    link: "https://www.ethereum.org",
  },
  {
    id: 5,
    src: "https://img.freepik.com/free-vector/flat-design-staking-illustration_23-2149402202.jpg?ga=GA1.1.1643460944.1721044067&semt=ais_hybrid",
    text: "Ethereum Blockchain",
    source: "Freepik",
    link: "https://www.ethereum.org",
  },
  {
    id: 6,
    src: "https://img.freepik.com/free-vector/flat-design-staking-illustration_23-2149402202.jpg?ga=GA1.1.1643460944.1721044067&semt=ais_hybrid",
    text: "Ethereum Blockchain",
    source: "Freepik",
    link: "https://www.ethereum.org",
  },
  {
    id: 7,
    src: "https://img.freepik.com/free-vector/flat-design-staking-illustration_23-2149402202.jpg?ga=GA1.1.1643460944.1721044067&semt=ais_hybrid",
    text: "Ethereum Blockchain",
    source: "Freepik",
    link: "https://www.ethereum.org",
  },
  {
    id: 8,
    src: "https://img.freepik.com/free-vector/flat-design-staking-illustration_23-2149402202.jpg?ga=GA1.1.1643460944.1721044067&semt=ais_hybrid",
    text: "Ethereum Blockchain",
    source: "Freepik",
    link: "https://www.ethereum.org",
  },
];

export const CategoryList: React.FC<CategoryListProps> = ({
  Category,
  maxDisplay,
}) => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 id="dynamic-title" className="text-4xl font-semibold py-4">
          {Category}
        </h1>
        <div className="flex justify-between items-center">
          <input
            typeof="search"
            placeholder="Search Projects"
            className="mx-2 bg-gray-600 p-2 rounded-full text-center text-sm text-white outline-black"
          />
          <button className="mx-2 bg-blue-700 py-2 px-8 text-white text-center text-sm rounded-full">
            Suggest Projects
          </button>
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-4">
        {showcaseArr.map((showcase, index) => {
          if (maxDisplay != 0 && index < maxDisplay) {
            return (
              <Showcase
                key={showcase.id}
                src={showcase.src}
                text={showcase.text}
                source={showcase.source}
                link={showcase.link}
              />
            );
          } else {
            return (
              <Showcase
                key={showcase.id}
                src={showcase.src}
                text={showcase.text}
                source={showcase.source}
                link={showcase.link}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
