import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Leaf, MapPin, Mail, Phone, Target, Eye, GraduationCap, Sprout, Store, Users } from "lucide-react";
import { TatuaFarmsContactForm } from "@/components/TatuaFarmsContactForm";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import tatuaFarmsHero from "@/assets/tatua-farms-hero.jpg";
import tatuaFarmsGarden from "@/assets/tatua-farms-garden.jpg";
import tatuaFarmsTeam from "@/assets/tatua-farms-team.jpg";
import tatuaFarmsWorkers from "@/assets/tatua-farms-workers.jpg";

const TatuaFarms = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative section-padding pt-32 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={tatuaFarmsHero}
            alt="TaTua Farm hydroponic system"
            className={cn(
              "w-full h-full object-cover transition-all duration-1000",
              heroVisible ? "scale-100" : "scale-110"
            )}
          />
          <div className="absolute inset-0 bg-background/75" />
        </div>
        <div className="relative container-wide">
          <div className="max-w-3xl">
            <span className={cn(
              "text-primary font-semibold uppercase tracking-wider text-sm mb-4 block transition-all duration-700",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              GAHSO Program
            </span>
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 transition-all duration-700 delay-100",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              TaTua Farm
            </h1>
            <p className={cn(
              "text-xl text-muted-foreground transition-all duration-700 delay-200",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Uplifting Young Women through sustainable agricultural practices
            </p>
          </div>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="section-padding">
        <div className="container-wide">
          <Tabs defaultValue="home" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="home">Home</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="home" className="space-y-12">
              {/* Welcome Section */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                    Welcome to TaTua Farm
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    TaTua Farm Initiative is a sustainable agricultural project by Global Alliance for A Healthy Society (GAHSO) empowering rural communities, particularly young women and youth, through innovative farming practices, capacity building, and agribusiness training.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    By integrating modern techniques with local knowledge, we aim to enhance food security, create job opportunities, and promote environmental sustainability.
                  </p>
                  <p className="text-foreground font-medium italic mb-6">
                    At TaTua Farm, we are more than just farmers—we are changemakers fostering resilience, independence, and growth in the heart of our communities.
                  </p>
                  <Button variant="cta" asChild>
                    <Link to="/donate" className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Support TaTua Farm
                    </Link>
                  </Button>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={tatuaFarmsGarden}
                    alt="Farming at TaTua Farm"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Team Working Section */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={tatuaFarmsTeam}
                    alt="TaTua Farm team working in the field"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={tatuaFarmsWorkers}
                    alt="Community members farming together"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="bg-muted rounded-2xl p-8">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                  Have any questions? Reach out to us!
                </h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground block">Location</span>
                      <span className="text-muted-foreground">Bondo, Kenya</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground block">Email</span>
                      <a href="mailto:tatuafarm@gahso.org" className="text-primary hover:underline">
                        tatuafarm@gahso.org
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground block">Phone</span>
                      <a href="tel:+254794372480" className="text-primary hover:underline">
                        +254-(0)-794-372-480
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Involved CTA */}
              <div className="bg-primary/10 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Get Involved
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Are you passionate about sustainable agriculture and community development? Join us!
                </p>
                <Button variant="default" asChild>
                  <Link to="/get-involved">Join TaTua Farm</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="about" className="space-y-12">
              {/* Who We Are */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                    Who We Are
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    TaTua Farm Initiative is rooted in the vision of transforming rural agriculture into a vehicle for economic empowerment and community development. We focus on equipping women and youth with the tools, skills, and resources they need to thrive in agribusiness while promoting environmentally friendly practices that preserve our planet for future generations.
                  </p>
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={tatuaFarmsWorkers}
                    alt="TaTua Farm community workers"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-primary/10 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower underserved communities by revolutionizing agriculture through training, innovation, and sustainable practices.
                  </p>
                </div>

                <div className="bg-muted rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To see every rural family achieve food security, financial independence, and a thriving community ecosystem.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="services" className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                Our Services
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Agribusiness Training */}
                <div className="bg-muted rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                    Agribusiness Training
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Empowering women and youth with practical knowledge in crop farming, livestock management, and agribusiness skills.
                  </p>
                </div>

                {/* Sustainable Farming Techniques */}
                <div className="bg-muted rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <Sprout className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                    Sustainable Farming Techniques
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Introducing eco-friendly techniques such as organic farming, crop rotation, and aquaponics to ensure environmental sustainability.
                  </p>
                </div>

                {/* Market Linkages */}
                <div className="bg-muted rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <Store className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                    Market Linkages
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Connecting farmers with reliable markets to ensure fair prices for their produce.
                  </p>
                </div>

                {/* Community Projects */}
                <div className="bg-muted rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                    Community Projects
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Supporting community-led agricultural initiatives that drive food security and economic growth.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                Contact TaTua Farm
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Have questions about TaTua Farm or want to get involved? We'd love to hear from you!
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Location</h4>
                        <p className="text-muted-foreground">Bondo, Kenya</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                        <a href="mailto:tatuafarm@gahso.org" className="text-primary hover:underline">
                          tatuafarm@gahso.org
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                        <a href="tel:+254794372480" className="text-primary hover:underline">
                          +254-(0)-794-372-480
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <TatuaFarmsContactForm />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default TatuaFarms;
