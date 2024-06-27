import { motion } from "framer-motion";
import ethLogoCircle from "@/assets/eth-logo-circle.svg";
import innerCircle from "@/assets/inner-circle.svg";
import midCircle from "@/assets/mid-circle.svg";
import outerCircle from "@/assets/outer-circle.svg";
import darkInnerCircle from "@/assets/dark-inner-circle.svg";
import darkMidCircle from "@/assets/dark-mid-circle.svg";
import darkOuterCircle from "@/assets/dark-outer-circle.svg";
import whiteLogo from "@/assets/2077-logo-text-white.svg";
import blackLogo from "@/assets/2077-logo-text-black.svg";
import whiteIconLogo from "@/assets/2077-logo-white.svg";
import blackIconLogo from "@/assets/2077-logo-black.svg";
import { Button } from "@/components/ui/button";
import { DiscordLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { useTheme } from "@/components/theme-provider";
import { ChevronDownIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Marquee from "react-fast-marquee";

export default function App() {
  const { theme } = useTheme();

  return (
    <>
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
            <a href="https://discord.com/invite/7cFD4ca9" className="space-x-2">
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
          <b>We believe</b> that crypto has the potential to give people across
          the world almost unimaginable levels of freedom and autonomy.
        </p>
        <p>
          <b>Our vision</b> is of a world where everyone has individual
          sovereignty, economic freedom and ownership of the infrastructure that
          supports them.
        </p>
        <p>
          <b>Our mission</b> is to accelerate Ethereum adoption, because for
          this vision to materialize, crypto must be built on a truly
          decentralized and permissionless base layer.
        </p>
      </section>
      <section className="mx-8 my-8">
        <label>
          <div className="w-full h-96 bg-center bg-anime-girl bg-cover rounded-3xl border border-foreground" />
          <p className="text-center text-muted-foreground">
            A real photograph of an Ethereum user in its natural habitat.
          </p>
        </label>
      </section>
      <section className="mx-8">
        <div className="flex flex-col lg:flex-row gap-y-4 gap-x-8">
          <div className="block lg:max-w-xl space-y-4 text-lg">
            <p className="font-semibold text-3xl">
              Ethereum's big problem:{" "}
              <span className="block underline underline-offset-4">
                lack of marketing.
              </span>
            </p>
            <p>
              There's an established community of researchers and developers
              focused on building and scaling Ethereum, but there's no unified
              community focused on promoting it.
            </p>
            <p>
              The people whose voices matter strongly, core developers and
              researchers, are often quiet. The empty space is filled with
              competitor noise which is often intellectually dishonest.{" "}
              <b>
                This shapes the world's view of Ethereum without anyone to
                credibly counteract it, until now.
              </b>
            </p>
            <p>
              The 2077 Collective will proactively shape the Ethereum narrative
              to help advance its position as the backbone of web3 and amplify
              the voices of protocol devs and researchers.
            </p>
          </div>

          <Separator className="my-4 lg:hidden" />
          <div className="italic">
            <p className="font-black">SYMPTOMS OF MARKETING DEFICIENCY</p>

            <ul className="text-lg text-transparent bg-gradient-to-b from-foreground to-foreground/40 bg-clip-text">
              <li>Being perceived as old and useless technology.</li>
              <li>Elite builders hidden away on Farcaster.</li>
              <li>The narrative being controlled by Solana.</li>
              <li>Alt-L1s spreading FUD about Ethereum daily.</li>
              <li>Competing innovations stealing the spotlight.</li>
            </ul>
            <p className="max-w-sm text-sm text-foreground/30 mt-4">
              If you are feeling any of these symptoms, please go to the 2077
              Collective immediately.
            </p>
          </div>
        </div>
      </section>
      <Separator className="my-16" />
      <section className="mx-8 mb-48">
        <div className="flex flex-col md:flex-row gap-y-4 gap-x-8">
          <div className="block max-w-3xl space-y-4 text-lg">
            <p className="font-semibold text-3xl">
              Marketing efforts are focusing on the wrong place
            </p>
            <p>
              Too much community energy is spent in tribal arguments on CT or
              talking to other crypto natives. Having circular arguments about
              the investment case or esoteric technical debates is not useful
              after a point.
            </p>
            <p>
              For most people,{" "}
              <b>
                energy is better spent showing the world what you can do with
                Ethereum right now and getting people on-chain.
              </b>{" "}
              This is what we'll be focusing on.
            </p>
          </div>
        </div>
      </section>
      <footer className="pt-64">
        <img
          src={theme == "light" ? blackLogo : whiteLogo}
          className="max-h-32 mx-auto mb-8 hidden sm:block"
        />
        <img
          src={theme == "light" ? blackIconLogo : whiteIconLogo}
          className="max-h-32 mx-auto mb-8 block sm:hidden"
        />
        <Marquee className="w-full font-mono select-none">
          LET'S ONBOARD THE NEXT BILLION USERS|LET'S ONBOARD THE NEXT BILLION
          USERS|LET'S ONBOARD THE NEXT BILLION USERS|LET'S ONBOARD THE NEXT
          BILLION USERS|LET'S ONBOARD THE NEXT BILLION USERS|
        </Marquee>
      </footer>
    </>
  );
}
