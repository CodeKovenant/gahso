import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Heart,
  Landmark,
  MessageCircle,
  Scale,
  Users,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import heroImpact from "@/assets/hero-impact.jpg";
import communityImage from "@/assets/hero-community.jpg";

const participationApproaches = [
  {
    title: "Civic education",
    description:
      "Supporting citizens to understand their rights, engage with government institutions and contribute meaningfully to policies and decisions that affect their lives.",
    icon: Scale,
  },
  {
    title: "Community dialogues",
    description:
      "Creating inclusive spaces where communities can share priorities, build shared understanding and participate in constructive conversations about local and national issues.",
    icon: MessageCircle,
  },
  {
    title: "Public participation",
    description:
      "Helping communities engage in county public participation and budget processes so that local priorities are heard in decisions about services and resources.",
    icon: Users,
  },
  {
    title: "Social accountability",
    description:
      "Strengthening the relationship between citizens and duty bearers through service delivery monitoring, dialogue and shared responsibility for better outcomes.",
    icon: Landmark,
  },
];

const governanceOutcomes = [
  "More informed and engaged citizens",
  "Stronger participation by young people, women and marginalized communities",
  "Improved dialogue between communities and government institutions",
  "Transparent, responsive, accountable and people-centred governance in Kenya",
];

const GovernanceDemocraticParticipation = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({
    threshold: 0.1,
  });
  const { ref: approachRef, isVisible: approachVisible } = useScrollAnimation({
    threshold: 0.15,
  });
  const { ref: outcomesRef, isVisible: outcomesVisible } = useScrollAnimation({
    threshold: 0.15,
  });

  return (
    <Layout>
      <section
        ref={heroRef}
        className="relative section-padding pt-32 overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={heroImpact}
            alt="Community members participating in civic life"
            className={cn(
              "w-full h-full object-cover transition-all duration-1000",
              heroVisible ? "scale-100" : "scale-110"
            )}
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative container-wide">
          <div className="max-w-4xl">
            <span
              className={cn(
                "text-primary font-semibold uppercase tracking-wider text-sm mb-4 block transition-all duration-700",
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
            >
              Our Programs
            </span>
            <h1
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 transition-all duration-700 delay-100",
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              Governance & Democratic Participation
            </h1>
            <p
              className={cn(
                "text-xl text-muted-foreground leading-relaxed transition-all duration-700 delay-200",
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              Building accountable, transparent and inclusive governance by
              helping citizens shape the decisions that affect their lives.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img
                src={communityImage}
                alt="Community members working together"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Strengthening citizen voice
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  GAHSO promotes accountable, transparent and inclusive
                  governance at both county and national levels, with a
                  particular focus on strengthening the participation of young
                  people, women and marginalized communities in decision-making
                  processes.
                </p>
                <p>
                  Through civic education, community dialogues, public
                  participation forums and social accountability initiatives,
                  GAHSO supports citizens to understand their rights, engage
                  with government institutions and contribute meaningfully to
                  policies and decisions that affect their lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={approachRef} className="section-padding bg-muted">
        <div className="container-wide">
          <div className="max-w-3xl mb-10">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              How we work
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
              Participation that reaches every level
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              GAHSO connects civic awareness with practical opportunities for
              communities to be heard, monitor progress and engage duty
              bearers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {participationApproaches.map((approach, index) => {
              const Icon = approach.icon;
              return (
                <article
                  key={approach.title}
                  className={cn(
                    "bg-background rounded-2xl p-6 shadow-sm transition-all duration-700",
                    approachVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {approach.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {approach.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section ref={outcomesRef} className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                County and national action
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-5">
                From participation to accountability
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-5">
                At the county level, GAHSO engages communities in public
                participation, budget processes, service delivery monitoring
                and dialogue with county authorities. At the national level,
                GAHSO promotes civic awareness, citizen engagement,
                accountability and constructive dialogue around national
                policies, governance and democratic processes.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Through these efforts, GAHSO seeks to strengthen the
                relationship between citizens and duty bearers and contribute
                to transparent, responsive, accountable and people-centred
                governance in Kenya.
              </p>
            </div>
            <div className="bg-primary/5 rounded-3xl p-7 md:p-9">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                What this makes possible
              </h3>
              <ul className="space-y-4">
                {governanceOutcomes.map((outcome, index) => (
                  <li
                    key={outcome}
                    className={cn(
                      "flex items-start gap-3 transition-all duration-500",
                      outcomesVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary/5">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Be part of a more accountable future
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Support communities to understand their rights, participate in
            decisions and hold institutions accountable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="cta" asChild>
              <Link to="/get-involved" className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Get Involved
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/donate" className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Support This Program
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/programs" className="flex items-center gap-2">
                Explore All Programs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GovernanceDemocraticParticipation;