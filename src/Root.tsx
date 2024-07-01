import {
  DiscordLogoIcon,
  HamburgerMenuIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { motion, useScroll } from "framer-motion";
import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/ui/mode-toggle";
import { Link, useRouteError } from "react-router-dom";
import { ReactNode, useState } from "react";
import NavMenu from "./components/menu";
import FarcasterBlackIcon from "./assets/farcaster-black.svg";
import FarcasterWhiteIcon from "./assets/farcaster-white.svg";

export default function Root({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col sm:flex-row overflow-hidden">
      <div className="fixed z-20 sm:h-screen sm:w-20 w-screen flex flex-col sm:flex-row">
        <div className="dark:bg-zinc-900 bg-zinc-300 p-4 sm:flex-col flex gap-4 sm:h-screen">
          <Button variant="outline" onClick={() => setOpen(!open)}>
            <HamburgerMenuIcon className="w-6 h-6" />
            {open}
          </Button>{" "}
          <ModeToggle className="sm:w-full" />
          <Button variant="secondary" asChild>
            <Link to="https://discord.com/invite/7cFD4ca9">
              <DiscordLogoIcon className="w-6 h-6" />
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link to="https://x.com/2077Collective">
              <TwitterLogoIcon className="w-6 h-6" />
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link to="https://www.farcaster.id/c/2077collective">
              <img src={FarcasterBlackIcon} className="w-6 h-6 dark:hidden" />
              <img
                src={FarcasterWhiteIcon}
                className="w-6 h-6 hidden dark:block"
              />
            </Link>
          </Button>
        </div>
        <motion.div
          className="bg-green-500 pr-1 h-screen origin-top hidden sm:block"
          style={{ scaleY: scrollYProgress }}
        />
        <motion.div
          className="bg-green-500 h-1 w-screen origin-left sm:hidden block"
          style={{ scaleX: scrollYProgress }}
        />
        <NavMenu open={open} setOpen={setOpen} />
      </div>

      <div className="w-full mt-24 sm:mt-0 sm:ml-24">{children}</div>
    </div>
  );
}
export function ErrorElement() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError() as any;
  console.error(error);

  return (
    <Root>
      <div className="p-4">
        <h2 className="font-bold text-3xl">{error.status}</h2>
        <p className="mb-4">{error.data}</p>
        <Button variant="secondary" asChild>
          <Link to="/">Back to homepage</Link>
        </Button>
      </div>
    </Root>
  );
}
