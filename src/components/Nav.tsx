import {
  DiscordLogoIcon,
  HamburgerMenuIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { motion, useScroll } from "framer-motion";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import NavMenu from "./menu";
import FarcasterIcon from "@/assets/farcaster.svg";
import { useState } from "react";

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="dark:bg-zinc-900 bg-zinc-300 p-4 sm:flex-col flex gap-4 sm:h-screen fixed">
        <Button variant="outline" onClick={() => setOpen(!open)}>
          <HamburgerMenuIcon className="w-6 h-6" />
          {open}
        </Button>{" "}
        <ModeToggle className="sm:w-full" />
        <Button variant="secondary" asChild>
          <a href="https://discord.gg/2077collective">
            <DiscordLogoIcon className="w-6 h-6" />
          </a>
        </Button>
        <Button variant="secondary" asChild>
          <a href="https://x.com/2077Collective">
            <TwitterLogoIcon className="w-6 h-6" />
          </a>
        </Button>
        <Button variant="secondary" asChild>
          <a href="https://www.farcaster.id/c/2077collective">
            <img src={FarcasterIcon.src} className="w-6 h-6 block" />
          </a>
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
    </>
  );
}
