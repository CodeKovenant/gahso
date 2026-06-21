import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { useContactForm, ContactFormData } from "@/hooks/useContactForm";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import heroContact from "@/assets/hero-contact.jpeg";

const contactInfo = [
  {
    icon: MapPin,
    title: "Bondo Office",
    details: ["GAHSO Kenya", "Next to Jaramogi Oginga Odinga", "University of Science and Technology (JOOSUT)", "Bondo, Kenya"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@gahso.org"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+254 706 077 426", "+254 768 508 538"],
  },
];

const initialFormState: ContactFormData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  
  const { submitForm, isSubmitting, errors, clearErrors } = useContactForm({
    source: "contact_page",
    onSuccess: () => setFormData(initialFormState),
  });

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      clearErrors();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative section-padding pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroContact}
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
              Contact Us
            </span>
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 transition-all duration-700 delay-100",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Let's Connect
            </h1>
            <p className={cn(
              "text-xl text-muted-foreground transition-all duration-700 delay-200",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Have questions about our programs, want to partner with us, or just want to say hello? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="card-elevated p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.first_name ? "border-destructive" : "border-input"
                      }`}
                      placeholder="John"
                    />
                    {errors.first_name && (
                      <p className="text-destructive text-sm mt-1">{errors.first_name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.last_name ? "border-destructive" : "border-input"
                      }`}
                      placeholder="Doe"
                    />
                    {errors.last_name && (
                      <p className="text-destructive text-sm mt-1">{errors.last_name}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.email ? "border-destructive" : "border-input"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.phone ? "border-destructive" : "border-input"
                    }`}
                    placeholder="+254 700 000 000"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.subject ? "border-destructive" : "border-input"
                    }`}
                  >
                    <option value="">Select a topic</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Volunteering">Volunteering</option>
                    <option value="Partnership Opportunities">Partnership Opportunities</option>
                    <option value="Donation Questions">Donation Questions</option>
                    <option value="Media & Press">Media & Press</option>
                    <option value="Program Information">Program Information</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="text-destructive text-sm mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none ${
                      errors.message ? "border-destructive" : "border-input"
                    }`}
                    placeholder="Tell us how we can help you..."
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="card-elevated p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-foreground mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, index) => (
                          <p key={index} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Office Hours */}
                <div className="card-elevated p-6 bg-primary/5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-foreground mb-2">
                        Office Hours
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 8:00 AM - 5:00 PM (EAT)
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Saturday: 9:00 AM - 1:00 PM (EAT)
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-serif font-bold text-foreground mb-4">
                  Follow Us
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Stay connected and get the latest updates on our work.
                </p>
                <div className="flex gap-3">
                  {[
                    { name: "Facebook", href: "https://www.facebook.com/Gahfso" },
                    { name: "X", href: "https://x.com/GAHSO254" },
                    { name: "YouTube", href: "https://www.youtube.com/channel/UC2NQHTpNKBP1rz7YJxD8lBg" },
                    { name: "LinkedIn", href: "https://ke.linkedin.com/company/gahso" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-96 bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">
              Interactive map coming soon
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
