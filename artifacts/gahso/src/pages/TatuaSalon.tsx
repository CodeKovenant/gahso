import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Scissors, Sparkles, Phone, Mail, Target, Eye, GraduationCap, Briefcase, Users, MapPin, Clock } from "lucide-react";
import { TatuaSalonContactForm } from "@/components/TatuaSalonContactForm";
import tatuaSalonMakeup from "@/assets/tatua-salon-makeup.jpg";
import tatuaSalonBraiding from "@/assets/tatua-salon-braiding.jpg";
const TatuaSalon = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-primary/10 to-muted">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
              An initiative by GAHSO
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              TaTua Salon
            </h1>
            <p className="text-xl text-muted-foreground">
              Your ultimate beauty destination
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
              {/* Services Preview */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-muted-foreground mb-6">
                    Need to speak with a specific stylist?
                  </p>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                    A Full Service Experience
                  </h2>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Scissors className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">Hair Styling</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">Makeup Services</span>
                    </div>
                  </div>
                  <Button variant="cta" asChild>
                    <Link to="/donate" className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Support TaTua Salon
                    </Link>
                  </Button>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img 
                    src={tatuaSalonMakeup} 
                    alt="Professional makeup services at TaTua Salon" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Mission Statement */}
              <div className="bg-muted rounded-2xl p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At TaTua Salon, our mission is to help you shine like the star you are! We specialize in creating flattering, contemporary looks tailored to suit your unique style. Whether you're looking for something fashion-forward, timeless, or perfect for a special occasion, TaTua Salon is your ultimate beauty destination.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We believe that <span className="font-semibold text-foreground">you are your best accessory</span>. That's why we offer a complete beauty experience, including professional hair styling, nail treatments, and makeup services—all designed to make you look and feel your absolute best.
                </p>
                <p className="text-lg text-foreground font-medium">
                  Visit us today and discover how TaTua Salon brings beauty and confidence together!
                </p>
              </div>

              {/* Booking CTA */}
              <div className="bg-primary/10 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Book an Appointment
                </h3>
                <p className="text-muted-foreground mb-6">
                  Call or email to book an appointment
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+254711883900"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    +254 (0)711-883-900
                  </a>
                  <a
                    href="mailto:tatuasalon@gahso.org"
                    className="inline-flex items-center justify-center gap-2 bg-background border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    tatuasalon@gahso.org
                  </a>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="about" className="space-y-12">
              {/* Header */}
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                  The TaTua Salon Experience
                </h2>
              </div>

              {/* Who We Are */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Who We Are
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to TaTua Salon, a transformative initiative under the TaTua Model by the Global Alliance for a Healthy Society (GAHSO). TaTua Salon empowers young women by providing professional hair and beauty training, mentorship, and business opportunities. Our goal is to create sustainable livelihoods for women, turning their passion for beauty into thriving careers.
                  </p>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img 
                    src={tatuaSalonBraiding} 
                    alt="Professional hair braiding at TaTua Salon" 
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
                    At TaTua Salon, we are committed to equipping young women with the skills, tools, and support they need to excel in the beauty industry. Through a combination of hands-on training, mentorship, and access to business resources, we aim to foster economic independence, boost confidence, and inspire long-term success.
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
                    We envision a future where every young woman has the opportunity to pursue her dreams, break barriers, and achieve financial independence. TaTua Salon is more than a project—it's a movement to empower women and inspire communities.
                  </p>
                </div>
              </div>

              {/* What We Offer */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
                  What We Offer
                </h3>
                <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                  TaTua Salon goes beyond beauty training. We provide:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-muted rounded-2xl p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="font-serif font-bold text-foreground mb-2">
                      Comprehensive Skill Development
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Hairdressing, styling, makeup, and client care.
                    </p>
                  </div>
                  <div className="bg-muted rounded-2xl p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Briefcase className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="font-serif font-bold text-foreground mb-2">
                      Entrepreneurial Guidance
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Business management, marketing strategies, and customer relationship building.
                    </p>
                  </div>
                  <div className="bg-muted rounded-2xl p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="font-serif font-bold text-foreground mb-2">
                      Mentorship and Support
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Access to experienced professionals who guide participants in building a sustainable career in the beauty industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-muted rounded-2xl p-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Why Choose Us
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  At TaTua Salon, we understand that empowering one woman transforms entire communities. Our initiative has already impacted the lives of many women, enabling them to establish their own salons, gain steady incomes, and create better futures for themselves and their families.
                </p>
              </div>

              {/* Join Us CTA */}
              <div className="bg-primary/10 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Join Us on This Journey
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Whether you're a young woman looking for an opportunity to learn, a partner seeking to support our mission, or a client looking for exceptional beauty services, TaTua Salon welcomes you. Together, we can create a brighter, more inclusive future.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="default" asChild>
                    <Link to="/get-involved">Get Involved</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/donate" className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Support Our Mission
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="services" className="space-y-12">
              {/* Intro */}
              <div className="max-w-3xl">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                  List of Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You're a beautiful canvas, and we're all about helping your inner beauty emerge. We create exclusive looks inspired by your personal style, event needs, and taste. Our team uses their eye for detail and high-quality salon products to deliver a range of services.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Hair Styling */}
                <div className="bg-muted rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Scissors className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">
                      Hair Styling
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-foreground">Blow Dry</span>
                      <span className="font-semibold text-primary">KES 200+</span>
                    </div>
                    <div className="flex justify-between items-start py-3 border-b border-border">
                      <div>
                        <span className="text-foreground">Styles</span>
                        <p className="text-sm text-muted-foreground">(labour only) + Braids (You can purchase from the Salon or bring your own)</p>
                      </div>
                      <span className="font-semibold text-primary whitespace-nowrap ml-4">KES 500+</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-foreground">Treatments</span>
                      <span className="font-semibold text-primary">KES 200+</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-foreground">Corrective Color</span>
                      <span className="font-semibold text-primary text-sm">Consultation</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-foreground">Hair Extensions</span>
                      <span className="font-semibold text-primary text-sm">Consultation</span>
                    </div>
                  </div>
                </div>

                {/* Makeup Services */}
                <div className="bg-primary/10 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">
                      Makeup Services
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-primary/20">
                      <span className="text-foreground">Full Face Makeup</span>
                      <span className="font-semibold text-primary">KES 1500+</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-primary/20">
                      <span className="text-foreground">Eye Makeup Only</span>
                      <span className="font-semibold text-primary">KES 500+</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-foreground">Eyebrow Arch (tweezing)</span>
                      <span className="font-semibold text-primary">KES 700+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking CTA */}
              <div className="bg-foreground text-background rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Ready to Book?
                </h3>
                <p className="mb-6 opacity-90">
                  Contact us to schedule your appointment
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+254711883900"
                    className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <a
                    href="mailto:tatuasalon@gahso.org"
                    className="inline-flex items-center justify-center gap-2 border border-background text-background px-6 py-3 rounded-lg font-medium hover:bg-background hover:text-foreground transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                Contact Us
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Hours & Appointments */}
                <div className="bg-muted rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">
                      Hours & Appointments
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Call or email to book an appointment:
                  </p>
                  <div className="space-y-3 mb-6">
                    <a href="tel:+254711883900" className="flex items-center gap-2 text-primary hover:underline">
                      <Phone className="w-4 h-4" />
                      +254 (0)711-883-900
                    </a>
                    <a href="mailto:tatuasalon@gahso.org" className="flex items-center gap-2 text-primary hover:underline">
                      <Mail className="w-4 h-4" />
                      tatuasalon@gahso.org
                    </a>
                  </div>
                  <div className="border-t border-border pt-6">
                    <h4 className="font-semibold text-foreground mb-3">Opening Hours</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday – Friday</span>
                        <span className="font-medium text-foreground">8AM – 8PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday – Sunday</span>
                        <span className="font-medium text-foreground">9AM – 6PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visit Us */}
                <div className="bg-primary/10 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">
                      Visit Us
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    We are located at <span className="font-semibold text-foreground">Kilo Nyalenda, Kisumu</span>.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Call or email to book an appointment:
                  </p>
                  <div className="space-y-3">
                    <a href="tel:+254711883900" className="flex items-center gap-2 text-primary hover:underline">
                      <Phone className="w-4 h-4" />
                      +254 (0)711-883-900
                    </a>
                    <a href="mailto:tatuasalon@gahso.org" className="flex items-center gap-2 text-primary hover:underline">
                      <Mail className="w-4 h-4" />
                      tatuasalon@gahso.org
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <TatuaSalonContactForm />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default TatuaSalon;
