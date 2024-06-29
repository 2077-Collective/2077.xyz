import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";

export default function NavMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}) {
  const [depth, setDepth] = useState(0);

  const sideVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{
            width: 0,
            transition: { delay: 0.2, duration: 0.3 },
          }}
        >
          <motion.nav
            className="h-screen min-w-72 p-4 border sm:border-r-foreground bg-background flex flex-col gap-2"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
          >
            {depth == 0 && (
              <>
                <Link onClick={() => setOpen(false)} to="/">
                  Home
                </Link>
                <Link onClick={() => setOpen(false)} to="/about">
                  About us
                </Link>
                <Link onClick={() => setOpen(false)} to="/values">
                  Values
                </Link>
                <Link onClick={() => setOpen(false)} to="/blog">
                  Blog
                </Link>
                <button
                  className="text-left flex flex-row items-center gap-2"
                  onClick={() => setDepth(1)}
                >
                  Technicals <ArrowRightIcon />
                </button>
              </>
            )}
            {depth == 1 && (
              <>
                <button
                  className="text-left flex flex-row items-center gap-2"
                  onClick={() => setDepth(0)}
                >
                  Back <ArrowLeftIcon />
                </button>
                <Link to="https://eip2077.info">EIP-2077</Link>
                <Link to="https://eips.wiki">EIP Wiki</Link>
                <Link to="https://etherpedia.2077.xyz">Etherpedia</Link>
              </>
            )}
          </motion.nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
