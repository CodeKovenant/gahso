import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Handshake, Briefcase, Mail, ArrowRight, CheckCircle } from "lucide-react";
import { VolunteerApplicationForm } from "@/components/VolunteerApplicationForm";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import heroGetInvolved from "@/assets/hero-get-involved.jpg";

const volunteerOpportunities = [
  {
    title: "Program Facilitator",
    commitment: "4-8 hours/week",
    description: "Lead workshops and training sessions for youth and women in our programs.",
    skills: ["Teaching", "Communication", "Leadership"],
  },
  {
    title: "Mentorship Coach",
    commitment: "2-4 hours/week",
    description: "Provide one-on-one guidance and support to program participants.",
    skills: ["Coaching", "Empathy", "Experience in relevant field"],
  },
  {
    title: "Community Outreach",
    commitment: "Flexible",
    description: "Help us reach new communities and spread awareness about our programs.",
    skills: ["Networking", "Public speaking", "Social media"],
  },
  {
    title: "Administrative Support",
    commitment: "5-10 hours/week",
    description: "Assist with documentation, data entry, and organizational tasks.",
    skills: ["Organization", "Attention to detail", "Computer literacy"],
  },
];

const partnershipTypes = [
  {
    icon: Handshake,
    title: "Corporate Partnerships",
    description: "Partner with us for CSR initiatives, employee volunteering, and impact-driven sponsorships.",
  },
  {
    icon: Briefcase,
    title: "Institutional Funding",
    description: "We welcome grants and funding from foundations, governments, and development agencies.",
  },
  {
    icon: Users,
    title: "Community Partnerships",
    description: "Local organizations can collaborate on program implementation and community mobilization.",
  },
];

const GetInvolved = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: volunteerRef, isVisible: volunteerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: partnerRef, isVisible: partnerVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative section-padding pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroGetInvolved}
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
              Get Involved
            </span>
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 transition-all duration-700 delay-100",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Join the Movement for Change
            </h1>
            <p className={cn(
              "text-xl text-muted-foreground transition-all duration-700 delay-200",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Whether you have time, skills, or resources to share, there's a place for you 
              in our mission to empower communities.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section ref={volunteerRef} className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className={cn(
              "transition-all duration-700",
              volunteerVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
                Volunteer With Us
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Give Your Time, Change Lives
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our volunteers are the heart of GAHSO. Whether you can commit a few hours 
                a week or join us for specific projects, your skills and passion can make 
                a real difference in the lives of vulnerable communities.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Flexible commitment options",
                  "Training and ongoing support provided",
                  "Work alongside passionate young leaders",
                  "See the direct impact of your contribution",
                ].map((item, index) => (
                  <li 
                    key={item} 
                    className={cn(
                      "flex items-start gap-3 transition-all duration-500",
                      volunteerVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    )}
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" asChild className="hover-glow">
                <a href="#volunteer-form" className="flex items-center gap-2">
                  Apply to Volunteer
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="space-y-4">
              {volunteerOpportunities.map((opportunity, index) => (
                <div 
                  key={opportunity.title} 
                  className={cn(
                    "card-interactive p-6 group transition-all duration-500",
                    volunteerVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                  )}
                  style={{ transitionDelay: `${index * 100 + 100}ms` }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                      {opportunity.title}
                    </h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {opportunity.commitment}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    {opportunity.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded group-hover:bg-primary/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Youth Leadership Program */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Youth Leadership Program
            </h2>
            <p className="text-secondary-foreground/90 mb-8 leading-relaxed">
              Are you a young person aged 18-35 passionate about community development? 
              Join our flagship Youth Leadership Program and develop the skills, network, 
              and experience to become a change-maker in your community.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                { label: "Duration", value: "6 Months" },
                { label: "Training Hours", value: "100+" },
                { label: "Mentorship", value: "1-on-1" },
              ].map((item) => (
                <div key={item.label} className="bg-secondary-foreground/10 rounded-xl p-4">
                  <div className="text-2xl font-bold">{item.value}</div>
                  <div className="text-sm opacity-80">{item.label}</div>
                </div>
              ))}
            </div>
            <Button 
              size="lg" 
              asChild
              className="bg-background text-foreground hover:bg-background/90"
            >
              <Link to="/contact">Apply for Next Cohort</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section ref={partnerRef} className="section-padding">
        <div className="container-wide">
          <div className={cn(
            "text-center mb-12 transition-all duration-700",
            partnerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">
              Partner With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Collaborate for Greater Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <div 
                key={type.title} 
                className={cn(
                  "card-interactive p-8 text-center group transition-all duration-700",
                  partnerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <type.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {type.title}
                </h3>
                <p className="text-muted-foreground">
                  {type.description}
                </p>
              </div>
            ))}
          </div>

          <div className={cn(
            "text-center mt-12 transition-all duration-700 delay-500",
            partnerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <Button variant="outline" size="lg" asChild className="hover-lift">
              <Link to="/contact" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Discuss Partnership
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section id="volunteer-form" className="section-padding bg-muted">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Volunteer Application
              </h2>
              <p className="text-muted-foreground">
                Fill out this form and our team will be in touch within 48 hours.
              </p>
            </div>

            <VolunteerApplicationForm />
          </div>
        </div>
      </section>

      {/* Quick Donate CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="bg-primary text-primary-foreground p-8 md:p-12 text-center rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
            <Heart className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Prefer to Support Financially?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Your donation directly funds our programs and helps transform lives in 
              marginalized communities.
            </p>
            <Button 
              size="lg" 
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 hover:scale-105"
            >
              <Link to="/donate" className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Make a Donation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetInvolved;
