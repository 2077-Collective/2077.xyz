import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="max-w-screen-lg p-8 flex flex-col gap-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>About us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-4xl font-semibold">About us</h1>
        <div>
          <h2 className="text-3xl font-semibold mb-2">
            What is the 2077 Collective?
          </h2>
          <p className="text-xl">
            The 2077 Collective is a league of creatives, researchers,
            developers, and marketers committed to making Ethereum cool again.
            We're a funnel for individuals to come into an organized group,
            onboard, collaborate/coordinate with other individuals and work
            towards the goal of growing, educating, and promoting the Ethereum
            ecosystem. We believe Ethereum is technology for good and want to
            play a role in its adoption within and outside of crypto.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-2">What do we do?</h2>
          <p className="text-xl">
            The 2077 Collective wants to create a better future for Ethereum. We
            bring together people passionate about growing the Ethereum
            ecosystem and give them the tools they need to succeed. We're a
            creative studio, research shop, and mad science lab rolled into
            one&mdash;a place where talented people can come together to build,
            research, write, and create in ways that add value to the Ethereum
            ecosystem.{" "}
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-2">What are our values?</h2>
          <p className="text-xl">
            Check out the{" "}
            <Link to="/values" className="underline">
              values page
            </Link>{" "}
            for a list of the values the 2077 Collective stands for.
          </p>
        </div>
      </div>
    </div>
  );
}
