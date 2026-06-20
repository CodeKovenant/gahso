import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Globe, Award, TrendingUp, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import heroImpact from "@/assets/hero-impact.jpg";
import programYouthLeadership from "@/assets/program-youth-leadership.jpg";
import programWomenEmpowerment from "@/assets/program-women-empowerment.jpg";
import programDisabilityInclusion from "@/assets/program-disability-inclusion.jpg";

const impactStats = [
  { icon: Users, value: "5,000+", label: "Youth Empowered" },
  { icon: Globe, value: "50+", label: "Communities Reached" },
  { icon: Award, value: "200+", label: "Active Volunteers" },
  { icon: TrendingUp, value: "85%", label: "Employment Rate" },
];

const successStories = [
  {
    name: "Faith Mwende",
    age: 24,
    program: "Youth Leadership",
    image: programYouthLeadership,
    location: "Nairobi, Kenya",
    story: "Faith joined GAHSO's Youth Leadership Program as a shy university student with big dreams but little confidence. Through intensive training, mentorship, and community project experience, she discovered her voice. Today, Faith leads a youth advocacy group of 50 members and has successfully campaigned for improved sanitation in three informal settlements. She now mentors other young women in her community.",
    quote: "GAHSO didn't just teach me skills – they showed me that young people like me can change the world.",
  },
  {
    name: "Mary Wangari",
    age: 35,
    program: "Women Empowerment",
    image: programWomenEmpowerment,
    location: "Kisumu, Kenya",
    story: "As a single mother of three, Mary struggled to provide for her family. Through GAHSO's Women Empowerment program, she learned tailoring skills and business management. With a small startup grant and ongoing mentorship, she opened a tailoring shop that now employs two other women. Her children are all in school, and she's training other women in her community.",
    quote: "I went from depending on others to being the one who helps. My children now believe anything is possible.",
  },
  {
    name: "James Otieno",
    age: 28,
    program: "Disability Inclusion",
    image: programDisabilityInclusion,
    location: "Mombasa, Kenya",
    story: "Born with a physical disability, James faced discrimination and limited opportunities throughout his life. GAHSO's Disability Inclusion program connected him with skills training, adaptive technology, and a supportive community. Today, he works as a customer service representative for a major telecommunications company and advocates for disability rights across Kenya.",
    quote: "GAHSO helped me see that my disability is just one part of who I am – not my limitation, but my motivation.",
  },
];

const yearlyProgress = [
  { year: "2020", youth: 1500, communities: 20, volunteers: 80 },
  { year: "2021", youth: 2500, communities: 30, volunteers: 120 },
  { year: "2022", youth: 3500, communities: 40, volunteers: 160 },
  { year: "2023", youth: 4500, communities: 45, volunteers: 180 },
  { year: "2024", youth: 5000, communities: 50, volunteers: 200 },
];

const Impact = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative section-padding pt-32 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImpact}
            alt="Community unity and growth"
            className={cn(
              "w-full h-full object-cover transition-all duration-1000",
              heroVisible ? "scale-100" : "scale-110"
            )}
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container-wide">
          <div className="max-w-3xl">
            <span className={cn(
              "text-primary-foreground/80 font-semibold uppercase tracking-wider text-sm mb-4 block transition-all duration-700",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              Our Impact
            </span>
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 transition-all duration-700 delay-100",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Measuring Change, Celebrating Progress
            </h1>
            <p className={cn(
              "text-xl text-primary-foreground/90 transition-all duration-700 delay-200",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Every number represents a life transformed. See the real impact of your support 
              on communities across Kenya and the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding -mt-12">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div key={stat.label} className="card-interactive p-6 md:p-8 text-center group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Chart */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">
              Our Growth
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Expanding Our Reach Year by Year
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card-elevated p-8">
              <div className="space-y-6">
                {yearlyProgress.map((year, index) => (
                  <div key={year.year} className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-bold text-foreground">{year.year}</div>
                    <div className="col-span-3">
                      <div className="relative h-8 bg-muted rounded-full overflow-hidden">
                        <div
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                          style={{ width: `${(year.youth / 5000) * 100}%` }}
                        />
                        <div className="absolute inset-0 flex items-center px-4">
                          <span className="text-sm font-medium text-primary-foreground">
                            {year.youth.toLocaleString()} youth
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Lives Transformed
            </h2>
          </div>

          <div className="space-y-16">
            {successStories.map((story, index) => (
              <div
                key={story.name}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                    <span className="text-primary font-medium text-sm">{story.program}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                    {story.name}, {story.age}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    {story.location}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {story.story}
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                    "{story.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Be Part of the Next Success Story
          </h2>
          <p className="text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Your support can help transform more lives. Every donation, big or small, 
            creates ripples of change in communities.
          </p>
          <Button 
            size="lg" 
            asChild
            className="bg-background text-foreground hover:bg-background/90"
          >
            <Link to="/donate" className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Donate Now
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Impact;
