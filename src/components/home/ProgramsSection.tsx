import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Accessibility, Activity, Leaf, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import programYouthLeadership from "@/assets/program-youth-leadership-new.jpg";
import programWomenEmpowerment from "@/assets/program-women-empowerment.jpg";
import programDisabilityInclusion from "@/assets/program-disability-inclusion.jpg";
import programCommunityHealth from "@/assets/program-community-health.jpg";
import programDigitalInclusion from "@/assets/program-digital-inclusion.jpg";
import programClimateLivelihoods from "@/assets/program-climate-livelihoods.jpg";

const programs = [
  {
    title: "Adolescent Girls & Young Women Empowerment",
    shortTitle: "AGYW Empowerment",
    description: "Enhancing the wellbeing, agency, and socio-economic resilience of adolescent girls and young women through integrated interventions addressing health, education, protection, and livelihoods.",
    focusAreas: ["Sexual & Reproductive Health Rights", "Menstrual health management", "Prevention of GBV", "Life skills & mentorship", "Education & economic empowerment"],
    image: programWomenEmpowerment,
    icon: Heart,
  },
  {
    title: "Youth Empowerment & Leadership Development",
    shortTitle: "Youth Leadership",
    description: "Nurturing informed, skilled, and engaged youth who can actively participate in social change and community development.",
    focusAreas: ["Youth leadership & governance", "Civic engagement & social accountability", "Digital literacy & media engagement", "Volunteerism & community service"],
    image: programYouthLeadership,
    icon: Users,
  },
  {
    title: "Disability Inclusion & Social Protection",
    shortTitle: "Disability Inclusion",
    description: "Promoting dignity, equity, and inclusion of persons with disabilities by addressing systemic barriers and strengthening access to services and opportunities.",
    focusAreas: ["Disability rights awareness & advocacy", "Economic inclusion & skills development", "Access to health, education & social protection", "Community sensitization"],
    image: programDisabilityInclusion,
    icon: Accessibility,
  },
  {
    title: "Community Health & Wellbeing",
    shortTitle: "Community Health",
    description: "Strengthening community health systems by focusing on preventive, promotive, and psychosocial health approaches.",
    focusAreas: ["Maternal, adolescent & child health", "Mental health & psychosocial support", "Nutrition, hygiene & WASH", "Substance use prevention"],
    image: programCommunityHealth,
    icon: Activity,
  },
  {
    title: "Climate Action, Livelihoods & Environmental Sustainability",
    shortTitle: "Climate & Livelihoods",
    description: "Integrating climate resilience with economic empowerment to improve livelihoods while protecting the environment.",
    focusAreas: ["Climate-smart agriculture & food security", "Green livelihoods & entrepreneurship", "Environmental conservation & education", "Market access via digital platforms"],
    image: programClimateLivelihoods,
    icon: Leaf,
  },
  {
    title: "Digital Inclusion & Innovation",
    shortTitle: "Digital Inclusion",
    description: "Harnessing technology, innovation, and climate-smart solutions to close digital gaps, improve access to vital information, and create sustainable opportunities.",
    focusAreas: ["Digital literacy & online safety", "Community internet access", "Digital entrepreneurship", "Mobile health information delivery"],
    image: programDigitalInclusion,
    icon: Smartphone,
  },
];

export function ProgramsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container-wide">
        <div
          className={cn(
            "flex flex-col md:flex-row md:items-end md:justify-between mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Our Programmes
            </h2>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link to="/programs" className="flex items-center gap-2">
              View All Programmes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Link
              key={program.title}
              to="/programs"
              className={cn(
                "group card-interactive overflow-hidden transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                      <program.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-background">
                      {program.shortTitle}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {program.focusAreas.slice(0, 3).map((area) => (
                    <span
                      key={area}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                  {program.focusAreas.length > 3 && (
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                      +{program.focusAreas.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
