import Categories from "@/components/projects/Categories";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Ecosystem Projects</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex justify-between">
        <h1 id="dynamic-title" className="text-4xl font-semibold py-4">
          Ecosystem Projects
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
      <section className="hero">
        <h1>Explore Ethereum Projects</h1>
        <p>
          Discover and contribute to open-source Ethereum projects built by the
          community.
        </p>
        <Categories description="EIPs" />
      </section>
    </div>
  );
}
