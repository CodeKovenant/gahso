import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Target, Leaf, Users, CheckCircle, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import heroPrograms from "@/assets/hero-programs.jpg";
import programCommunityDevelopment from "@/assets/program-community-development.jpg";

const YouthVoice = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: objectivesRef, isVisible: objectivesVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: activitiesRef, isVisible: activitiesVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: outcomesRef, isVisible: outcomesVisible } = useScrollAnimation({ threshold: 0.15 });

  const objectives = [
    "Increase access to nutritious and climate-resilient food for young women and adolescent girls through sustainable farming, gardening, and food production initiatives.",
    "Empower participants with knowledge, skills, and resources to strengthen livelihoods and income-generating opportunities.",
    "Promote climate-smart practices in agriculture and community food systems to ensure long-term resilience.",
    "Enhance community awareness on nutrition, food security, and climate adaptation strategies.",
    "Build local capacity through training in sustainable agriculture, market access, and entrepreneurship.",
  ];

  const activities = [
    "Establish climate-resilient community gardens and small-scale farms",
    "Conduct training on sustainable agriculture, nutrition, and climate-smart practices",
    "Provide tools, inputs, and mentorship to support income-generating initiatives",
    "Organize community workshops and awareness sessions on food security and nutrition",
    "Monitor and evaluate impact on food security, livelihoods, and empowerment outcomes",
  ];

  const outcomes = [
    "Improved food security and access to nutritious food for participants and their households",
    "Enhanced skills, knowledge, and economic empowerment among young women and adolescent girls",
    "Adoption of climate-resilient agricultural practices at the community level",
    "Strengthened community capacity for sustainable and resilient livelihoods",
  ];

  const crossCuttingThemes = [
    "Gender equality and women empowerment",
    "Climate-smart and sustainable development",
    "Nutrition and community health",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative section-padding pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroPrograms}
            alt="Youth Voice Climate-Resilient Food Security"
            className={cn(
              "w-full h-full object-cover transition-all duration-1000",
              heroVisible ? "scale-100" : "scale-110"
            )}
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative container-wide">
          <div className="max-w-4xl">
            <div className={cn(
              "flex items-center gap-2 mb-4 transition-all duration-700",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Funded by SHOFCO
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground text-sm">GE-FS Project</span>
            </div>
            <h1 className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 transition-all duration-700 delay-100",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Youth Voice – Climate-Resilient Food Security for Young Women and Adolescent Girls
            </h1>
            <p className={cn(
              "text-xl text-muted-foreground transition-all duration-700 delay-200",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Enhancing food security and empowering marginalized young women and adolescent girls 
              through a climate-resilient and inclusive approach that builds sustainable livelihoods 
              and strengthens community resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Project Image & Goal */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img
                src={programCommunityDevelopment}
                alt="Climate-resilient farming"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Project Goal
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To enhance food security and empower marginalized young women and adolescent girls 
                through a climate-resilient and inclusive approach that builds sustainable livelihoods 
                and strengthens community resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section ref={objectivesRef} className="section-padding bg-muted">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h2 className={cn(
              "text-2xl md:text-3xl font-serif font-bold text-foreground transition-all duration-700",
              objectivesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Project Objectives
            </h2>
          </div>
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className={cn(
                  "bg-background rounded-xl p-5 shadow-sm transition-all duration-500",
                  objectivesVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <p className="text-muted-foreground">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Activities */}
      <section ref={activitiesRef} className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Key Activities
                </h2>
              </div>
              <ul className="space-y-4">
                {activities.map((activity, index) => (
                  <li
                    key={index}
                    className={cn(
                      "flex items-start gap-3 transition-all duration-500",
                      activitiesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Expected Outcomes
                </h2>
              </div>
              <ul className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <li
                    key={index}
                    className={cn(
                      "flex items-start gap-3 transition-all duration-500",
                      outcomesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Cutting Themes */}
      <section ref={outcomesRef} className="section-padding bg-primary/5">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">
            Cross-Cutting Themes
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {crossCuttingThemes.map((theme, index) => (
              <div
                key={index}
                className={cn(
                  "bg-background rounded-full px-6 py-3 shadow-sm border border-primary/20 transition-all duration-500",
                  outcomesVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-foreground font-medium">{theme}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Support This Project
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your contribution helps empower young women and adolescent girls with climate-resilient 
            food security and sustainable livelihoods.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="cta" asChild>
              <Link to="/donate" className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Donate Now
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default YouthVoice;