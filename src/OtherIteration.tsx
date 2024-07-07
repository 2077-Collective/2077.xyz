import innerCircle from "@/assets/inner-circle.svg";
import midCircle from "@/assets/mid-circle.svg";
import outerCircle from "@/assets/outer-circle.svg";
import { Button } from "./components/ui/button";
import { useScroll, motion } from "framer-motion";
import { DiscordLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

function App2() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="flex flex-col w-full h-full bg-background text-foreground relative">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-green-500 fixed w-full top-0 left-0 right-0 pb-2 z-10"
      />

      <div className="bg-black border-black grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        <section className="bg-white p-16 relative rounded-xl lg:col-span-2">
          <h1 className="text-4xl font-manrope font-semibold uppercase block items-center">
            <span className="w-min text-8xl font-sans font-bold text-green-500">
              2077
            </span>
          </h1>
          <p className="max-w-xl text-xl">we make ethereum cool again</p>
          <div className="flex flex-row mt-4 gap-2 text-xl">
            <Button asChild>
              <a href="https://discord.gg/2077collective">
                <DiscordLogoIcon className="mr-2 h-6 w-6" />
                Discord
              </a>
            </Button>
            <Button asChild>
              <a href="https://x.com/2077Collective">
                <TwitterLogoIcon className="mr-2 h-6 w-6" /> Twitter
              </a>
            </Button>
          </div>
        </section>
        <section className="bg-white px-8 py-8 rounded-xl">
          <div className="text-xl space-y-2">
            <p className="font-semibold text-2xl">
              The problem:{" "}
              <span className="underline underline-offset-4">
                lack of marketing
              </span>
              .
            </p>
            <ul className="text-lg">
              <p>Being perceived as a boomer chain.</p>
              <p>Being perceived as old and useless technology.</p>
              <p>Elite human capital stuck on Farcaster.</p>
              <p>A narrative controlled by Solana.</p>
            </ul>
            <hr />

            <p>Without marketing, what use is building?</p>
            <p>Even within Crypto Twitter, many are unaware of L2 scaling.</p>
            <p className="font-semibold">
              As such, we are about to flip this state of affairs upside-down.
            </p>
          </div>
        </section>
        <section className="bg-white rounded-xl flex">
          <p className="text-center mx-auto my-auto">
            Replace this with an image.
          </p>
        </section>
      </div>
      <div className="dark bg-background h-screen p-4">
        <div className="relative h-96 flex items-center justify-center fill-white">
          <motion.img
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 14,
            }}
            className="absolute"
            src={outerCircle}
          />
          <motion.img
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 12,
            }}
            className="absolute"
            src={midCircle}
          />
          <motion.img
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 10,
            }}
            className="absolute"
            src={innerCircle}
          />
        </div>
        <p className="text-white text-center mt-2">An image of a cat.</p>
      </div>
      <section className="dark bg-background text-foreground h-screen p-8">
        <div className="max-w-3xl space-y-4 pt-16">
          <p className="text-4xl">Solana has marketing. Why not Ethereum?</p>
          <p className="text-4xl font-medium">Well, that's what we are.</p>
          <div className="space-x-4">
            <Button asChild>
              <a href="https://discord.gg/2077collective">
                <DiscordLogoIcon className="mr-2 h-6 w-6" />
                Discord
              </a>
            </Button>
            <Button asChild>
              <a href="https://x.com/2077Collective">
                <TwitterLogoIcon className="mr-2 h-6 w-6" /> Twitter
              </a>
            </Button>
          </div>
        </div>
      </section>
      <footer></footer>
    </main>
  );
}

export default App2;
