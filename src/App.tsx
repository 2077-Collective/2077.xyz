import { motion } from "framer-motion";
import ethLogoCircle from "@/assets/eth-logo-circle.svg";
import innerCircle from "@/assets/inner-circle.svg";
import midCircle from "@/assets/mid-circle.svg";
import outerCircle from "@/assets/outer-circle.svg";
import { Button } from "./components/ui/button";
import { DiscordLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "./components/ui/mode-toggle";

export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col sm:flex-row overflow-hidden">
      <div className="dark:bg-zinc-900 bg-zinc-400 p-4 sm:flex-col flex gap-4">
        <Button variant="secondary">
          <DiscordLogoIcon className="w-6 h-6" />
        </Button>
        <Button variant="secondary">
          <TwitterLogoIcon className="w-6 h-6" />
        </Button>
        <ModeToggle />
      </div>

      <div className="w-full">
        <header className="p-8 relative w-full h-screen">
          <h1 className="text-3xl">We are the 2077 Collective.</h1>
          <div className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-800 to-zinc-400 dark:from-zinc-100 dark:to-zinc-600 text-xl">
            <h1>Nosotros somos el Colectivo 2077.</h1>
            <h1> Wir sind das 2077 Kollektiv.</h1>
            <h1>我们是 2077 集体。</h1>
            <h1>Мы Коллектив 2077.</h1>
            <h1>نحن مجموعة 2077.</h1>
          </div>
          <p className="mt-8 font-bold text-xl max-w-xl">
            <span>We are</span>{" "}
            <span className="bg-pink-400 dark:bg-pink-700 px-1 inline-block">
              creatives
            </span>
            ,
            <span className="bg-blue-400 dark:bg-blue-700 px-1 inline-block">
              researchers
            </span>
            ,
            <span className="bg-green-400 dark:bg-green-700 px-1 inline-block">
              marketers
            </span>
            , and{" "}
            <span className="bg-orange-600 px-1 inline-block">developers</span>{" "}
            all working to make Ethereum cool again.
          </p>
          <img
            className=" w-1/2 absolute top-0 right-0 -mr-48 lg:-mr-64"
            src={ethLogoCircle}
          />
          <div className="hidden sm:block">
            <motion.img
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 60,
              }}
              className=" w-1/2 absolute top-0 right-0 -mr-48 lg:-mr-64"
              src={outerCircle}
            />
            <motion.img
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 50,
              }}
              className="absolute w-1/2 top-0 right-0 -mr-48 lg:-mr-64"
              src={midCircle}
            />
            <motion.img
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 40,
              }}
              className="absolute w-1/2 top-0 right-0 -mr-48 lg:-mr-64"
              src={innerCircle}
            />
          </div>
        </header>
        <section>
          <p className="text-xl">In the</p>
        </section>
      </div>
    </div>
  );
}
