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
import sponsors from "@/assets/sponsors.svg";
import { Button } from "@/components/ui/button";
import {
  DiscordLogoIcon,
  ExternalLinkIcon,
  ReaderIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "@/components/theme-provider";
import { Separator } from "@/components/ui/separator";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function App() {
  const { theme } = useTheme();

  return (
    <>
      <header className="p-8 relative w-full pb-80 max-sm:h-screen">
        <h1 className="text-3xl">We are the 2077 Collective.</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/60 text-xl">
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
        <div className="mt-4 gap-2 flex flex-col sm:flex-row text-lg font-mono select-none">
          <Button variant="secondary" asChild>
            <a href="https://discord.com/invite/7cFD4ca9" className="space-x-2">
              <DiscordLogoIcon className="w-6 h-6" />
              <span>JOIN THE DISCORD</span>
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="https://x.com/2077Collective" className="space-x-2">
              <TwitterLogoIcon className="w-6 h-6" />
              <span>FOLLOW US ON X</span>
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <Link to="/blog" className="space-x-2">
              <ReaderIcon className="w-6 h-6" />
              <span>READ THE BLOG</span>
            </Link>
          </Button>
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
      <section className="mx-8 mb-48 text-2xl max-w-screen-lg space-y-4">
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
      <section className="mx-8">
        <div className="flex flex-col lg:flex-row gap-y-4 gap-x-8">
          <div className="block lg:max-w-xl space-y-4 text-lg">
            <p className="font-semibold text-4xl">
              Ethereum's big problem:
              <span className="block underline underline-offset-4">
                Lack of marketing
              </span>
            </p>
            <p className="font-semibold text-3xl">
              Ethereum marketing department?{" "}
              <span className="line-through">ERC</span> Error 404
            </p>
            <p>
              There's an established community of researchers and developers
              focused on building and scaling Ethereum,{" "}
              <b>but there's no unified community focused on promoting it.</b>{" "}
              Independent marketing projects at the L2 or dapp/infrastructure
              layer—while net positive and beneficial for Ethereum—tend to be
              self-interested and ultimately focused on one specific (albeit
              important) piece of the puzzle they have an interest in.
            </p>
            <p className="font-semibold text-3xl">
              A (visible) narrative vacuum
            </p>
            <p>
              The people whose voices really matter—core developers,
              researchers, builders—are often quiet. The empty space is filled
              with competitor noise, which is often intellectually dishonest.
              This shapes the world's view of Ethereum without anyone to
              credibly counteract the psyops, dispel misinformation, and
              proactively share good narratives about Ethereum with the world.
            </p>
            <p className="font-semibold text-3xl">Focus on the wrong things</p>
            <p>
              Too much of the Ethereum community's energy is spent in tribal
              arguments on crypto-Twitter, or talking to other crypto natives.
              Having circular arguments about the investment case or esoteric
              technical debates is not useful after a point. For most people,
              <b>
                energy is better spent showing the world what users can do with
                Ethereum <i>right now</i> and getting people on-chain.
              </b>
            </p>
          </div>

          <Separator className="my-4 lg:hidden" />
          <div className="italic">
            <p className="font-black">SYMPTOMS OF MARKETING DEFICIENCY</p>

            <ul className="text-lg text-transparent bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text">
              <li>Being perceived as old and useless technology.</li>
              <li>Elite builders not getting enough attention.</li>
              <li>The crypto narrative controlled by alt-L1s.</li>
              <li>Influencers waging information warfare and spreading FUD.</li>
              <li>Competing innovations stealing the spotlight.</li>
            </ul>
            <p className="max-w-sm text-sm text-foreground/50 mt-4">
              If you are feeling any of these symptoms, please go to the 2077
              Collective immediately.
            </p>
          </div>
        </div>
      </section>
      <Separator className="my-16" />

      <section className="mx-8 my-8">
        <h1 className="text-4xl mb-4">
          We are Ethernauts making Ethereum cool again and solving ETH's
          marketing problem.
        </h1>
        <p className="mb-4 text-xl">
          The 2077 Collective has authored EIP-2077: Ethereum Marketing
          Department to prescribe a strategy for marketing the Ethereum brand
          online and IRL. EIP-2077 provides a blueprint that guides 2077
          Collective's marketing efforts:
        </p>
        <ol className="space-y-2 font-mono max-w-screen-sm">
          <li className="flex">
            <div className="px-2 py-1 text-xl bg-red-500 border border-foreground h-min mr-2">
              1
            </div>
            Establish consensus on core marketing problems, create public good
            infrastructure to tackle marketing problems, and forge relationships
            between builders and marketers.
          </li>
          <li className="flex">
            <div className="px-2 py-1 text-xl bg-yellow-500 border border-foreground h-min mr-2">
              2
            </div>
            Ethpill newcomers, defend Ethereum from FUD + psyops, and amplify
            the voices of protocol devs, researchers, and builders.
          </li>
          <li className="flex">
            <div className="px-2 py-1 text-xl bg-green-500 border border-foreground h-min mr-2">
              3
            </div>
            Bring more people on-chain, increase % of builders in the Ethereum
            ecosystem, and create tools + resources to onboard users/devs.
          </li>
          <li className="flex">
            <div className="px-2 py-1 text-xl bg-blue-500 border border-foreground h-min mr-2">
              4
            </div>
            Increase mindshare, adoption, and investment in Ethereum through
            coordinated marketing efforts in the ecosystem and educate users,
            builders, and businesses about Ethereum L1/L2s.
          </li>
        </ol>
      </section>

      <section className="mx-8 my-8">
        <label>
          <div className="w-full h-96 bg-center bg-anime-girl bg-cover rounded-3xl border border-foreground" />
          <p className="text-center text-muted-foreground">
            A real unedited photograph of an Ethernaut in their natural habitat.
          </p>
        </label>
      </section>

      <section className="mx-8 mt-8 mb-8">
        <img
          src={sponsors}
          className="max-w-screen-md w-full mx-auto border border-foreground"
        />
      </section>
      <section className="w-full flex flex-row justify-center">
        <div className="p-4">
          <p className="text-xl">
            A huge thanks to our supporters for making 2077 possible:
          </p>
          <div className="flex flex-row gap-4">
            <ol className="list-disc list-inside">
              <li className="space-x-1 hover:text-green-400 underline">
                <a href="https://www.spire.dev/">Spire Labs</a>
                <ExternalLinkIcon className="inline" />
              </li>
              <li className="space-x-1 hover:text-green-400 underline">
                <a href="https://www.eigenlayer.xyz/">EigenLayer</a>
                <ExternalLinkIcon className="inline" />
              </li>
              <li className="space-x-1 hover:text-green-400 underline">
                <a href="https://www.starknet.io/">StarkNet</a>
                <ExternalLinkIcon className="inline" />
              </li>
              <li className="space-x-1 hover:text-green-400 underline">
                <a href="http://megaeth.systems/">MegaETH</a>
                <ExternalLinkIcon className="inline" />
              </li>
            </ol>
            <ol className="list-disc list-inside">
              <li className="space-x-1 hover:text-green-400 underline">
                <a href="https://www.abcde.com/">ABCDE</a>
                <ExternalLinkIcon className="inline" />
              </li>
              <li className="space-x-1 hover:text-green-400 underline">
                <a href="https://www.metalex.tech/">MetaLeX</a>
                <ExternalLinkIcon className="inline" />
              </li>
              <li className="space-x-1 hover:text-green-400 underline">
                <a href="https://x.com/0xshake">Bo Du</a>
                <ExternalLinkIcon className="inline" />
              </li>
              <li className="space-x-1 hover:text-green-400 underline">
                <a href="https://x.com/jamesyoung">James Young</a>
                <ExternalLinkIcon className="inline" />
              </li>
            </ol>
            <ol className="list-disc list-inside">
              <li className="space-x-1 hover:text-green-400 underline">
                <a href="https://www.azuki.com">Azuki</a>
                <ExternalLinkIcon className="inline" />
              </li>
              <li className="space-x-1 hover:text-green-400 underline">
                <a href="https://www.light.so">Light.so</a>
                <ExternalLinkIcon className="inline" />
              </li>
              <li className="space-x-1">Johannes</li>
            </ol>
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
