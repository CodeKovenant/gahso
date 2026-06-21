import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Target, Wifi, Users, CheckCircle, ArrowRight, Smartphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import heroFunded from "@/assets/hero-funded-projects.jpeg";
import programYouthLeadership from "@/assets/program-youth-leadership.jpg";

const DigitalInclusion = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: objectivesRef, isVisible: objectivesVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: activitiesRef, isVisible: activitiesVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: outcomesRef, isVisible: outcomesVisible } = useScrollAnimation({ threshold: 0.15 });

  const objectives = [
    "Increase digital access for marginalized girls and women in underserved communities through community Wi-Fi hubs and mobile connectivity solutions.",
    "Enhance digital literacy, including safe internet use, online communication, and basic digital skills.",
    "Promote education, SRHR, and livelihoods via digital platforms delivering information on sexual and reproductive health, entrepreneurship, and vocational skills.",
    "Build local capacity by training community facilitators to maintain digital infrastructure and sustain digital literacy programs.",
    "Foster inclusive partnerships between local communities, government agencies, and private sector stakeholders to ensure sustainability and long-term impact.",
  ];

  const activities = [
    "Establish community internet hubs in targeted areas along the Lake Victoria shore",
    "Conduct digital literacy training programs for girls and women",
    "Develop and disseminate SRHR, education, and livelihood content via online platforms and mobile applications",
    "Provide mentorship and support for women-led digital entrepreneurship initiatives",
    "Monitor and evaluate program impact, including digital engagement, knowledge gains, and socio-economic outcomes",
  ];

  const outcomes = [
    "Increased internet access and digital engagement among marginalized girls and women",
    "Enhanced knowledge and skills in digital literacy, SRHR, and livelihood development",
    "Empowered communities with sustainable access to digital resources",
    "Strengthened partnerships and local capacity for ongoing digital inclusion initiatives",
  ];

  const crossCuttingThemes = [
    "Gender equality and women empowerment",
    "Digital inclusion and innovation",
    "Sustainable development and climate-smart solutions",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative section-padding pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroFunded}
            alt="Digital Inclusion for Girls and Women"
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
                CUDI-GW Project
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground text-sm">Lake Victoria Region</span>
            </div>
            <h1 className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 transition-all duration-700 delay-100",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Connecting the Unconnected: Digital Inclusion for Girls and Women
            </h1>
            <p className={cn(
              "text-xl text-muted-foreground transition-all duration-700 delay-200",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Bridging the digital divide for marginalized girls and women along the Lake Victoria 
              shore by providing affordable access to digital tools, internet connectivity, and 
              digital literacy skills, enabling empowerment, education, and economic opportunities.
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
                src={programYouthLeadership}
                alt="Digital literacy training"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Project Goal
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To bridge the digital divide for marginalized girls and women along the Lake Victoria 
                shore by providing affordable access to digital tools, internet connectivity, and 
                digital literacy skills, enabling empowerment, education, and economic opportunities.
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
                  <Smartphone className="w-6 h-6 text-primary" />
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
            Support Digital Inclusion
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your contribution helps bridge the digital divide for marginalized girls and women, 
            enabling empowerment through technology.
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

export default DigitalInclusion;