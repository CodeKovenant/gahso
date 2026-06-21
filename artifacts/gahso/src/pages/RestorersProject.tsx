import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Target, Shield, Users, CheckCircle, ArrowRight, Handshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import heroPrograms from "@/assets/hero-programs.jpg";
import programWomenEmpowerment from "@/assets/program-women-empowerment.jpg";

const RestorersProject = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: objectivesRef, isVisible: objectivesVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: activitiesRef, isVisible: activitiesVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: outcomesRef, isVisible: outcomesVisible } = useScrollAnimation({ threshold: 0.15 });

  const objectives = [
    "Enhance SRHR knowledge and access among adolescent girls and women through community-based education, counselling, and digital platforms.",
    "Prevent and respond to gender-based violence, providing support services, referrals, and awareness campaigns.",
    "Strengthen psychosocial wellbeing and life skills of girls and women to build confidence, resilience, and empowerment.",
    "Develop community capacity through training of mentors, facilitators, and local stakeholders to sustain the interventions.",
    "Promote partnerships and advocacy to influence policies that advance gender equality and SRHR at the local and national levels.",
  ];

  const activities = [
    "Conduct community outreach and SRHR education sessions for adolescent girls and women",
    "Establish safe spaces and support services for GBV survivors, including counselling and referral pathways",
    "Develop and disseminate awareness campaigns using digital platforms, local media, and community networks",
    "Train community mentors and facilitators to sustain SRHR education and psychosocial support programs",
    "Organize stakeholder engagement and advocacy initiatives to strengthen community and policy support for women and girls",
  ];

  const outcomes = [
    "Increased SRHR knowledge and access to health services among girls and women",
    "Reduced incidents of gender-based violence through prevention, awareness, and support mechanisms",
    "Improved psychosocial wellbeing, confidence, and resilience among participants",
    "Strengthened community capacity to sustain SRHR and GBV interventions",
    "Enhanced partnerships and advocacy efforts that support gender equality and women's rights",
  ];

  const crossCuttingThemes = [
    "Gender equality and women empowerment",
    "Health and psychosocial wellbeing",
    "Community-led development and sustainability",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative section-padding pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroPrograms}
            alt="The Restorers Project"
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
                GAHSO & Precious Gem UK
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground text-sm">Western Kenya</span>
            </div>
            <h1 className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 transition-all duration-700 delay-100",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              The Restorers Project: Empowering Girls and Women for SRHR and Gender Equality
            </h1>
            <p className={cn(
              "text-xl text-muted-foreground transition-all duration-700 delay-200",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Empowering adolescent girls and women in underserved communities in Western Kenya 
              by improving access to sexual and reproductive health and rights (SRHR) information 
              and services, addressing gender-based violence (GBV), and fostering holistic wellbeing 
              and resilience.
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
                src={programWomenEmpowerment}
                alt="Women empowerment and SRHR"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Project Goal
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To empower adolescent girls and women in underserved communities in Western Kenya 
                by improving access to sexual and reproductive health and rights (SRHR) information 
                and services, addressing gender-based violence (GBV), and fostering holistic wellbeing 
                and resilience.
              </p>
              <div className="mt-6 p-4 bg-muted rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Handshake className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">Implementing Partners</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  This project is implemented by GAHSO (Global Alliance for a Healthy Society) 
                  and Precious Gem UK.
                </p>
              </div>
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
            Support The Restorers Project
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your contribution helps empower adolescent girls and women with SRHR knowledge, 
            GBV support services, and holistic wellbeing programs.
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

export default RestorersProject;