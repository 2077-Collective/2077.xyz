import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export default function Values() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="max-w-screen-lg p-8 flex flex-col gap-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Our values</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-4xl font-semibold">Our values</h1>
        <div>
          <h2 className="text-3xl font-semibold mb-2">Flexibility</h2>
          <p className="text-xl">
            We are not a traditional startup with bells and whistles. Crypto
            makes it possible for Internet strangers to coordinate with
            strangers on the Internet and pull off impressive feats. We provide
            maximum flexibility for contributors: the only requirement is to
            operate and deliver consistently.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-2">
            Open global participation
          </h2>
          <p className="text-xl">
            Anyone in the world should be able to participate&mdash;irrespective
            of their background, affiliations, and philosophies&mdash;on
            maximally equal footing. Like Ethereum itself, participation in the
            Collective is permissionless and open to anyone with a desire to
            contribute positively to the Ethereum ecosystem.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-2">
            Meritocracy &gt; bureaucracy
          </h2>
          <p className="text-xl">
            We lean into anon culture and emphasize operating vs. performing,
            positive-sum games vs. zero-sum games, legitimacy by performance vs.
            legitimacy by continuity, vibrancy vs. sterility, and flexible
            structures vs. middle management and bureaucratic processes. The pie
            is big enough, and those who grow the pie must naturally have a
            (larger) share in it.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-2">Sovereignty</h2>
          <p className="text-xl">
            Autonomy, self-leadership, and personal independence are necessary
            for innovation and creativity to thrive. We give room for the
            risk-takers, innovators, and operators to flourish and do their best
            work without stifling their freedom or raising the barrier to
            action.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-2">
            Creativity and authenticity
          </h2>
          <p className="text-xl">
            We're dreamers who believe in powerful ideas and their ability to
            change the world. We experiment with radical approaches and bet
            against the consensus&mdash;our efforts are geared towards playing
            long-term games and maximizing ROI on high-conviction plays. We
            allow for self-expression and believe work can and should be an
            avenue for people to create beautiful things that are
            indistinguishable from art.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-2">Speed </h2>
          <p className="text-xl">
            The speed limit doesn't exist, and the standard pace is for chumps.
            At 2077 Collective, moving fast and making things&mdash;whilst
            honoring our commitment to quality&mdash;is a credo that influences
            our short-term and long-term actions. We're big believers in
            maintaining a strong bias toward action and prioritizing (rapid)
            experimentation and execution over (prolonged) analysis and
            deliberation.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-2">
            Think and act like winners
          </h2>
          <p className="text-xl">
            We play for keepers and go all in. We don't play the odds or
            second-guess our chances of success. If no path exists towards
            achieving our most ambitious goals, we will make one&mdash;no
            obstacle is too large, no setback too damaging, and nothing enough
            to break our will or destroy our resolve to succeed in the market.
            We're fearless, persistent, aggressive, relentless and courageous;
            we're biased towards displaying and enacting radical competence and
            winning based on merit and the quality of our efforts.
          </p>
        </div>
      </div>
    </div>
  );
}
