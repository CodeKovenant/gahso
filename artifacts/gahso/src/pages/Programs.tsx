import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target, ArrowRight, Accessibility, Activity, Leaf, Smartphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import heroPrograms from "@/assets/hero-programs.jpeg";
import programYouthLeadership from "@/assets/program-youth-leadership-new.jpg";
import programWomenEmpowerment from "@/assets/program-women-empowerment.jpg";
import programDisabilityInclusion from "@/assets/program-disability-inclusion.jpg";
import programCommunityHealth from "@/assets/program-community-health.jpg";
import programDigitalInclusion from "@/assets/program-digital-inclusion.jpg";
import programClimateLivelihoods from "@/assets/program-climate-livelihoods.jpg";

const programs = [
  {
    id: "agyw-empowerment",
    title: "Adolescent Girls & Young Women Empowerment",
    description: "GAHSO works to enhance the wellbeing, agency, and socio-economic resilience of adolescent girls and young women through integrated interventions that address health, education, protection, and livelihoods.",
    image: programWomenEmpowerment,
    icon: Heart,
    beneficiaries: "Adolescent girls and young women in vulnerable communities",
    focusAreas: [
      "Sexual and Reproductive Health and Rights (SRHR)",
      "Menstrual health management",
      "Prevention of gender-based violence (GBV)",
      "Life skills, leadership, and mentorship",
      "Education retention and economic empowerment",
    ],
    outcomes: [
      "1,200+ young women trained in life skills",
      "500+ girls supported with menstrual health products",
      "70% improvement in school retention rates",
    ],
  },
  {
    id: "youth-leadership",
    title: "Youth Empowerment & Leadership Development",
    description: "This thematic area focuses on nurturing informed, skilled, and engaged youth who can actively participate in social change and community development.",
    image: programYouthLeadership,
    icon: Users,
    beneficiaries: "Youth aged 15-35",
    focusAreas: [
      "Youth leadership and governance",
      "Civic engagement and social accountability",
      "Digital literacy and media engagement",
      "Volunteerism and community service",
    ],
    outcomes: [
      "2,500+ youth trained in leadership skills",
      "150+ community projects initiated by alumni",
      "85% employment rate among program graduates",
    ],
  },
  {
    id: "disability-inclusion",
    title: "Disability Inclusion & Social Protection",
    description: "GAHSO promotes dignity, equity, and inclusion of persons with disabilities by addressing systemic barriers and strengthening access to services and opportunities.",
    image: programDisabilityInclusion,
    icon: Accessibility,
    beneficiaries: "Persons with disabilities and their families",
    focusAreas: [
      "Disability rights awareness and advocacy",
      "Economic inclusion and skills development",
      "Access to health, education, and social protection services",
      "Community sensitization to reduce stigma",
    ],
    outcomes: [
      "500+ persons with disabilities supported",
      "20+ organizations trained in inclusion",
      "5 policy advocacy wins for accessibility",
    ],
  },
  {
    id: "community-health",
    title: "Community Health & Wellbeing",
    description: "GAHSO strengthens community health systems by focusing on preventive, promotive, and psychosocial health approaches.",
    image: programCommunityHealth,
    icon: Activity,
    beneficiaries: "Underserved communities across Kenya",
    focusAreas: [
      "Maternal, adolescent, and child health",
      "Mental health and psychosocial support (MHPSS)",
      "Nutrition, hygiene, and WASH",
      "Substance use prevention and health education",
    ],
    outcomes: [
      "15,000+ people reached with health education",
      "50+ community health workers trained",
      "30% reduction in preventable health issues",
    ],
  },
  {
    id: "climate-livelihoods",
    title: "Climate Action, Livelihoods & Environmental Sustainability",
    description: "This thematic area integrates climate resilience with economic empowerment to improve livelihoods while protecting the environment.",
    image: programClimateLivelihoods,
    icon: Leaf,
    beneficiaries: "Farmers, entrepreneurs, and rural communities",
    focusAreas: [
      "Climate-smart agriculture and food security",
      "Green livelihoods and entrepreneurship",
      "Environmental conservation and climate education",
      "Market access through digital and community platforms",
    ],
    outcomes: [
      "300+ farmers trained in sustainable agriculture",
      "100+ green enterprises supported",
      "10+ environmental conservation projects launched",
    ],
  },
  {
    id: "digital-inclusion",
    title: "Digital Inclusion & Innovation",
    description: "GAHSO harnesses technology, innovation, and climate-smart solutions to close digital gaps, improve access to vital health and environmental information, and create sustainable economic opportunities.",
    image: programDigitalInclusion,
    icon: Smartphone,
    beneficiaries: "Youth, women, and underserved communities",
    focusAreas: [
      "Digital literacy and online safety",
      "Community internet access",
      "Digital entrepreneurship",
      "Using online tools and mobile applications to deliver accessible health information",
    ],
    outcomes: [
      "1,000+ individuals trained in digital skills",
      "5+ community internet hubs established",
      "200+ digital entrepreneurs supported",
    ],
  },
];

interface ProgramCardProps {
  program: typeof programs[0];
  index: number;
}

function ProgramCard({ program, index }: ProgramCardProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      id={program.id}
      className={`grid md:grid-cols-2 gap-12 items-center ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className={isReversed ? "md:order-2" : ""}>
        <div className={cn(
          "aspect-[4/3] rounded-3xl overflow-hidden shadow-xl transition-all duration-700",
          isVisible 
            ? "opacity-100 translate-x-0 scale-100" 
            : isReversed 
              ? "opacity-0 translate-x-12 scale-95"
              : "opacity-0 -translate-x-12 scale-95"
        )}>
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
      
      <div className={isReversed ? "md:order-1" : ""}>
        <h2 className={cn(
          "text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 transition-all duration-700",
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-8"
        )}>
          {program.title}
        </h2>
        <p className={cn(
          "text-muted-foreground mb-6 leading-relaxed transition-all duration-700 delay-100",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {program.description}
        </p>
        
        <div className={cn(
          "mb-6 transition-all duration-700 delay-150",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="flex items-center gap-2 text-primary font-semibold mb-2">
            <Users className="w-5 h-5" />
            <span>Target Beneficiaries</span>
          </div>
          <p className="text-muted-foreground">{program.beneficiaries}</p>
        </div>

        <div className={cn(
          "mb-6 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="flex items-center gap-2 text-primary font-semibold mb-2">
            <Target className="w-5 h-5" />
            <span>Focus Areas</span>
          </div>
          <ul className="space-y-1">
            {program.focusAreas.map((area, i) => (
              <li 
                key={area} 
                className={cn(
                  "text-muted-foreground flex items-center gap-2 transition-all duration-500",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                )}
                style={{ transitionDelay: `${250 + i * 50}ms` }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div className={cn(
          "bg-muted rounded-xl p-4 mb-6 transition-all duration-700 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="font-semibold text-foreground mb-2">Impact Highlights</div>
          <ul className="space-y-1">
            {program.outcomes.map((outcome) => (
              <li key={outcome} className="text-muted-foreground text-sm">
                ✓ {outcome}
              </li>
            ))}
          </ul>
        </div>

        <Button variant="cta" asChild className={cn(
          "transition-all duration-700 delay-400 hover-glow",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Link to="/donate" className="flex items-center gap-2">
            <Heart className="w-5 h-5" />
            Support This Program
          </Link>
        </Button>
      </div>
    </div>
  );
}

const Programs = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative section-padding pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroPrograms}
            alt="Community unity and growth"
            className={cn(
              "w-full h-full object-cover transition-all duration-1000",
              heroVisible ? "scale-100" : "scale-110"
            )}
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="relative container-wide">
          <div className="max-w-3xl">
            <span className={cn(
              "text-primary font-semibold uppercase tracking-wider text-sm mb-4 block transition-all duration-700",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              Our Programs
            </span>
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 transition-all duration-700 delay-100",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Transforming Lives Through Action
            </h1>
            <p className={cn(
              "text-xl text-muted-foreground transition-all duration-700 delay-200",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Our programs are designed to create sustainable, lasting change in the lives of 
              vulnerable individuals and communities across Kenya and the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-24">
            {programs.map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="section-padding bg-muted">
        <div className="container-wide text-center">
          <h2 className={cn(
            "text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 transition-all duration-700",
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Want to Learn More?
          </h2>
          <p className={cn(
            "text-muted-foreground mb-8 max-w-2xl mx-auto transition-all duration-700 delay-100",
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Explore our impact stories and see how your support transforms lives.
          </p>
          <Button asChild className={cn(
            "transition-all duration-700 delay-200 hover-lift",
            ctaVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}>
            <Link to="/impact" className="flex items-center gap-2">
              View Our Impact
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
