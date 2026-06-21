import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, ChefHat, GraduationCap, Users, Wallet, UtensilsCrossed, UserCheck, Utensils, Globe, Calendar, ClipboardList, Mail, Phone, MapPin } from "lucide-react";
import { MloFlowContactForm } from "@/components/MloFlowContactForm";

const MloFlow = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-primary/10 to-muted">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
              GAHSO Program
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              MloFlow
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering chefs, transforming lives
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
              {/* Introduction */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                    Introduction
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    At MloFlow, we bring the art of exceptional dining to your doorstep. Our platform connects you with skilled culinary professionals, making it easy to hire expert chefs for your catering needs or in-dine experiences.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Whether you're hosting a special event or seeking a private chef for an unforgettable meal, MloFlow ensures you have access to top-notch talent that delivers excellence every time.
                  </p>
                  <Button variant="cta" asChild>
                    <Link to="/donate" className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Support MloFlow
                    </Link>
                  </Button>
                </div>
                <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center">
                  <ChefHat className="w-24 h-24 text-primary/30" />
                </div>
              </div>

              {/* What Sets MloFlow Apart */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
                  What sets MloFlow apart is its holistic model
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-muted rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-serif font-bold text-foreground mb-3">
                      Training and Mentorship
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Participants receive hands-on culinary education and personalized guidance to refine their skills.
                    </p>
                  </div>

                  <div className="bg-muted rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-serif font-bold text-foreground mb-3">
                      Client Connection
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Our platform links these talented chefs to clients, ensuring a steady stream of opportunities for income generation and professional growth.
                    </p>
                  </div>

                  <div className="bg-muted rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Wallet className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-serif font-bold text-foreground mb-3">
                      Economic Empowerment
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      By equipping youths with the tools for success, MloFlow fosters economic independence and helps break the cycle of financial dependency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact Statement */}
              <div className="bg-primary/10 rounded-2xl p-8 text-center">
                <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
                  Through this joint initiative with local culinary institutions, MloFlow drives social and economic change, supporting young culinary professionals in becoming self-reliant while delivering top-tier catering services. <span className="font-semibold">Together, we're creating opportunities, building futures, and making an impact—one meal at a time.</span>
                </p>
              </div>
            </TabsContent>

            <TabsContent value="about" className="space-y-12">
              {/* Mission */}
              <div className="max-w-3xl">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  At MloFlow, our mission is to empower female youth from underserved communities by providing them with professional chef training and opportunities to build successful careers.
                </p>
              </div>

              {/* How It Works */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
                  How It Works
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="relative">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      1
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-foreground mb-2">Recruitment and Training</h4>
                      <p className="text-sm text-muted-foreground">Identifying and training talented youth in professional culinary skills</p>
                    </div>
                    <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-primary/30" />
                  </div>

                  <div className="relative">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      2
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-foreground mb-2">Certification and Registration</h4>
                      <p className="text-sm text-muted-foreground">Official certification and registration under MloFlow platform</p>
                    </div>
                    <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-primary/30" />
                  </div>

                  <div className="relative">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      3
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-foreground mb-2">Enlist for Hire</h4>
                      <p className="text-sm text-muted-foreground">Chefs on Hire and catering services on MloFlow platform</p>
                    </div>
                    <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-primary/30" />
                  </div>

                  <div className="relative">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      4
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-foreground mb-2">Ongoing Support</h4>
                      <p className="text-sm text-muted-foreground">Continuous support and growth opportunities for career advancement</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="services" className="space-y-12">
              {/* Overview */}
              <div className="max-w-3xl">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                  Overview of Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  At MloFlow, we offer a range of culinary services designed to meet the diverse needs of our clients. Whether you're hosting a small gathering or a large corporate event, our skilled chefs deliver exceptional quality and professionalism. Our services empower young women while ensuring your event is a culinary success.
                </p>
              </div>

              {/* Catering Services */}
              <div className="bg-muted rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    <UtensilsCrossed className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground">
                    Catering Services
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our catering services provide customized food solutions for a variety of events. From weddings and birthdays to corporate functions and intimate gatherings, MloFlow offers a wide range of cuisines, tailored to your event's theme and preferences.
                </p>
                <p className="font-semibold text-foreground mb-4">Our chefs specialize in:</p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-background rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">Local & International Cuisines</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Featuring traditional African dishes, continental meals, and fusion cuisine to cater to every palate.
                    </p>
                  </div>
                  <div className="bg-background rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">Event Types</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Weddings, corporate luncheons, parties, conferences, and intimate home dinners.
                    </p>
                  </div>
                  <div className="bg-background rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <ClipboardList className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">Menu Customization</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Work closely with our chefs to design a menu that fits your unique needs, dietary requirements, and preferences.
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  MloFlow chefs are trained to deliver top-tier culinary experiences, with attention to quality, presentation, and service.
                </p>
              </div>

              {/* Chefs on Hire */}
              <div className="bg-primary/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    <UserCheck className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground">
                    Chefs on Hire
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With MloFlow's Chefs on Hire service, clients can book highly trained chefs for private events, corporate functions, or other special occasions.
                </p>
                <p className="font-semibold text-foreground mb-4">Our chefs are available to cater to:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-background rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Utensils className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">Private Dinners</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Enjoy a personalized dining experience in the comfort of your home with a professional chef at your service.
                    </p>
                  </div>
                  <div className="bg-background rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">Corporate Events</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Impress your clients and colleagues with gourmet meals prepared by our expert chefs.
                    </p>
                  </div>
                  <div className="bg-background rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">Celebrations & Gatherings</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Whether it's a birthday, anniversary, or family reunion, MloFlow chefs bring a unique flavor to every occasion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Booking CTA */}
              <div className="bg-foreground text-background rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Service Booking
                </h3>
                <p className="mb-6 opacity-90">
                  Ready to book our services? Select your service below.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="lg" asChild>
                    <Link to="/contact">Book Catering Services</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="bg-transparent border-background text-background hover:bg-background hover:text-foreground" asChild>
                    <Link to="/contact">Hire a Chef</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                Contact MloFlow
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    We'd love to hear from you! Whether you have a question, want to partner with us, or are interested in hiring our services, feel free to reach out. We're here to help!
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                        <a href="mailto:info@mloflow.co.ke" className="text-primary hover:underline">
                          info@mloflow.co.ke
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                        <a href="tel:+254753917042" className="text-primary hover:underline">
                          +254 (0) 753-917-042
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Address</h4>
                        <p className="text-muted-foreground">Karen, Nairobi Kenya</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <MloFlowContactForm />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default MloFlow;
