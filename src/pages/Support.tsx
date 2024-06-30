import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export default function Support() {
  return (
    <div className="flex flex-col p-8 max-w-screen-xl mx-auto">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Support us</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section className="max-w-screen-lg mt-4">
        <h1 className="text-4xl font-semibold mb-4">Support us</h1>
        <p className="text-xl">
          If you're a fan of our work, join us in our mission to build and
          maintain Ethereum marketing!
        </p>
      </section>
      <section className="max-w-screen-lg">
        <ul className="text-xl space-y-2 mt-2 list-disc list-inside">
          <li>
            <a
              href="https://discord.com/invite/7cFD4ca9"
              className="underline hover:text-green-500 underline-offset-4"
            >
              Join our Discord server
            </a>
          </li>
          <li>Write some content about Ethereum</li>
          <li>Do research into Ethereum protocols</li>
          <li>Spread the word about 2077 Collective</li>
          <li>
            Send donations to{" "}
            <code className="py-1 px-2 rounded mx-1 bg-zinc-800">
              lynett.eth
            </code>{" "}
            or{" "}
            <code className="py-1 px-2 rounded mx-1 bg-zinc-800">
              0xC2f3F2c8084d6bc40887B0B867353d280e3D742D
            </code>
            <p className="text-base">
              (if you want to be added to the supporters list on the main page,
              contact us)
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
