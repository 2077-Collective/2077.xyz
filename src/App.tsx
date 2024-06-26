import { motion, useScroll } from "framer-motion";
import ethLogoCircle from "@/assets/eth-logo-circle.svg";
import innerCircle from "@/assets/inner-circle.svg";
import midCircle from "@/assets/mid-circle.svg";
import outerCircle from "@/assets/outer-circle.svg";
import darkInnerCircle from "@/assets/dark-inner-circle.svg";
import darkMidCircle from "@/assets/dark-mid-circle.svg";
import darkOuterCircle from "@/assets/dark-outer-circle.svg";
import animeGirlImage from "@/assets/anime-girl.png";
import { Button } from "./components/ui/button";
import { DiscordLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "./components/ui/mode-toggle";
import { useTheme } from "./components/theme-provider";
import { ChevronDownIcon } from "lucide-react";

export default function App() {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col sm:flex-row overflow-hidden">
      <div className="fixed z-20 sm:h-screen sm:w-20 w-screen flex flex-col sm:flex-row">
        <div className="dark:bg-zinc-900 bg-zinc-300 p-4 sm:flex-col flex gap-4 sm:h-screen">
          <ModeToggle />
          <Button variant="secondary" asChild>
            <a href="https://discord.com/invite/7cFD4ca9">
              <DiscordLogoIcon className="w-6 h-6" />
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="https://x.com/2077Collective">
              <TwitterLogoIcon className="w-6 h-6" />
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
      </div>

      <div className="w-full mt-24 sm:mt-0 sm:ml-24 max-w-screen-xl">
        <header className="p-8 relative w-full pb-64 max-sm:h-screen">
          <h1 className="text-3xl">We are the 2077 Collective.</h1>
          <div className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40 text-xl">
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
          <div className="mt-4 space-x-2 text-lg font-mono select-none">
            <Button variant="secondary" asChild>
              <a
                href="https://discord.com/invite/7cFD4ca9"
                className="space-x-2"
              >
                <DiscordLogoIcon className="w-6 h-6" />
                <span>DISCORD SERVER</span>
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="https://x.com/2077Collective" className="space-x-2">
                <TwitterLogoIcon className="w-6 h-6" />
                <span>FOLLOW US ON X</span>
              </a>
            </Button>
          </div>
          <div className="sm:hidden absolute bottom-0 left-0 right-0 mb-32">
            <ChevronDownIcon className="mx-auto w-8 h-8" />
          </div>
          <div className="hidden sm:block select-none">
            <img
              className=" w-1/2 absolute top-0 right-0 -mr-48 lg:-mr-64"
              src={ethLogoCircle}
            />
            <motion.img
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 60,
              }}
              className=" w-1/2 absolute top-0 right-0 -mr-48 lg:-mr-64"
              src={theme == "dark" ? outerCircle : darkOuterCircle}
            />
            <motion.img
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 50,
              }}
              className="absolute w-1/2 top-0 right-0 -mr-48 lg:-mr-64"
              src={theme == "dark" ? midCircle : darkMidCircle}
            />
            <motion.img
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 40,
              }}
              className="absolute w-1/2 top-0 right-0 -mr-48 lg:-mr-64"
              src={theme == "dark" ? innerCircle : darkInnerCircle}
            />
          </div>
        </header>
        <section className="mx-8 mt-16 mb-48 text-2xl max-w-screen-lg space-y-4">
          <p>
            <b>We believe</b> that crypto has the potential to give people
            across the world almost unimaginable levels of freedom and autonomy.
          </p>
          <p>
            <b>Our vision</b> is of a world where everyone has individual
            sovereignty, economic freedom and ownership of the infrastructure
            that supports them.
          </p>
          <p>
            <b>Our mission</b> is to accelerate Ethereum adoption, because for
            this vision to materialise, crypto must be built on a truly
            decentralised and permissionless base layer.
          </p>
        </section>
        <section className="mx-8 my-8">
          <label>
            <img
              src={animeGirlImage}
              className="w-full rounded-3xl border border-foreground"
            ></img>
            <p className="text-center text-muted-foreground">
              A real photograph of an Ethereum user in its natural habitat.
            </p>
          </label>
        </section>
        <section className="mx-8 mb-48">
          <div className="flex flex-col sm:flex-row gap-y-4 gap-x-8">
            <div className="block max-w-xl space-y-4">
              <p className="font-semibold text-3xl">
                Ethereum's big problem:{" "}
                <span className="block underline underline-offset-4">
                  lack of marketing.
                </span>
              </p>
              <p className="text-lg">
                There's an established community of researchers and developers
                focused on building and scaling Ethereum, but there's no unified
                community focused on promoting it.
              </p>
              <p className="text-lg">
                Ethereum doesn't have a marketing team but its competitors do.
                The Ethereum Foundation take a hands off approach and the
                community is often too humble.
              </p>
            </div>

            <div className="">
              <p className="font-black">SIDE EFFECTS</p>
              <ul className="text-lg text-transparent bg-gradient-to-b from-foreground to-foreground/40 bg-clip-text">
                <li>Being perceived as old and useless technology.</li>
                <li>Elite human capital hidden away on Farcaster.</li>
                <li>The narrative being controlled by Solana.</li>
                <li>Alt-L1s spreading FUD about Ethereum daily.</li>
                <li>Competing innovations stealing the spotlight.</li>
              </ul>
            </div>
          </div>
        </section>
        <section>our team</section>
      </div>
    </div>
  );
}
