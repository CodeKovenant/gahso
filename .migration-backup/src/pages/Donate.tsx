import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, GraduationCap, Home, CheckCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import heroDonate from "@/assets/hero-donate.jpg";

const donationTiers = [
  {
    amount: 20,
    title: "Youth Champion",
    icon: GraduationCap,
    description: "Support one young person's participation in a leadership workshop.",
    impact: "Provides training materials and refreshments for one participant"
  },
  {
    amount: 50,
    title: "Skills Builder",
    icon: Users,
    description: "Fund vocational skills training for a woman seeking economic independence.",
    impact: "Covers materials and instruction for one week of skills training"
  },
  {
    amount: 100,
    title: "Community Champion",
    icon: Home,
    description: "Support community inclusion programs for persons with disabilities.",
    impact: "Funds accessibility adaptations or assistive devices for one beneficiary"
  },
  {
    amount: 250,
    title: "Impact Maker",
    icon: Shield,
    description: "Sponsor a complete mentorship cycle for a program participant.",
    impact: "Provides 3 months of mentorship, training, and support services"
  }
];

const trustIndicators = [
  "100% of donations go directly to programs",
  "Transparent financial reporting",
  "Regular impact updates sent to donors",
  "Registered nonprofit in Kenya and UK"
];

const PAYSTACK_URL = "https://paystack.shop/pay/z1kku7swwc";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [showPayment, setShowPayment] = useState(false);

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: tiersRef, isVisible: tiersVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: usageRef, isVisible: usageVisible } = useScrollAnimation({ threshold: 0.2 });

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const displayAmount = customAmount ? parseInt(customAmount) || 0 : selectedAmount;

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative section-padding pt-32 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroDonate}
            alt="Community unity and growth"
            className={cn(
              "w-full h-full object-cover transition-all duration-1000",
              heroVisible ? "scale-100" : "scale-110"
            )}
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className={cn(
              "w-16 h-16 mx-auto mb-6 transition-all duration-700",
              heroVisible ? "opacity-100 scale-100 animate-pulse" : "opacity-0 scale-50"
            )} />
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 transition-all duration-700 delay-100",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Your Gift Transforms Lives
            </h1>
            <p className={cn(
              "text-xl text-primary-foreground/90 transition-all duration-700 delay-200",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Every donation, no matter the size, creates ripples of change in 
              vulnerable communities across Kenya and the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section ref={tiersRef} className="section-padding -mt-12">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Donation Tiers */}
            <div className="lg:col-span-3 space-y-6">
              <h2 className={cn(
                "text-2xl font-serif font-bold text-foreground transition-all duration-700",
                tiersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                Choose Your Impact Level
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {donationTiers.map((tier, index) => (
                  <button
                    key={tier.amount}
                    onClick={() => handleAmountSelect(tier.amount)}
                    className={cn(
                      "card-interactive p-6 text-left transition-all duration-500",
                      selectedAmount === tier.amount
                        ? "ring-2 ring-primary border-primary scale-[1.02]"
                        : "hover:border-primary/50",
                      tiersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    )}
                    style={{ transitionDelay: `${index * 100 + 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={cn(
                        "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300",
                        selectedAmount === tier.amount && "bg-primary scale-110"
                      )}>
                        <tier.icon className={cn(
                          "w-6 h-6 transition-colors",
                          selectedAmount === tier.amount ? "text-primary-foreground" : "text-primary"
                        )} />
                      </div>
                      <div className="text-2xl font-serif font-bold text-primary">
                        ${tier.amount}
                      </div>
                    </div>
                    <h3 className="font-serif font-bold text-foreground mb-2">
                      {tier.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {tier.description}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {tier.impact}
                    </p>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className={cn(
                "card-elevated p-6 transition-all duration-700 delay-500",
                tiersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Or enter a custom amount
                </label>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold group-focus-within:text-primary transition-colors">
                    $
                  </span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => handleCustomAmount(e.target.value)}
                    className="w-full pl-10 pr-4 py-4 text-2xl font-bold rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter amount"
                    min="1"
                  />
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="lg:col-span-2">
              <div className={cn(
                "card-elevated p-6 md:p-8 sticky top-24 transition-all duration-700 delay-300",
                tiersVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              )}>
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                  Make Your Donation
                </h3>

                {displayAmount && displayAmount > 0 && (
                  <div className="bg-primary/10 rounded-xl p-4 mb-6 text-center animate-scale-in">
                    <div className="text-sm text-muted-foreground mb-1">Suggested donation</div>
                    <div className="text-4xl font-serif font-bold text-primary">
                      ${displayAmount}
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <Button
                    variant="donate"
                    size="xl"
                    className="w-full"
                    onClick={() => setShowPayment(true)}
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Donate Now
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Secure payment powered by Paystack.
                    Supports cards, mobile money, and bank transfers.
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="text-sm font-medium text-foreground mb-3">
                    Your donation is safe
                  </div>
                  <ul className="space-y-2">
                    {trustIndicators.map((indicator, index) => (
                      <li
                        key={indicator}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {indicator}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Donations Are Used */}
      <section ref={usageRef} className="section-padding bg-muted">
        <div className="container-wide">
          <div className={cn(
            "text-center mb-12 transition-all duration-700",
            usageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              How Your Donation Is Used
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe in transparency. Here's how we allocate every dollar to maximize impact.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className={cn(
              "card-elevated p-8 transition-all duration-700 delay-200",
              usageVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}>
              <div className="space-y-6">
                {[
                  { label: "Program Implementation", percentage: 75, color: "bg-primary" },
                  { label: "Community Capacity Building", percentage: 15, color: "bg-secondary" },
                  { label: "Administration & Operations", percentage: 10, color: "bg-accent" }
                ].map((item, index) => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">{item.label}</span>
                      <span className="font-bold text-foreground">{item.percentage}%</span>
                    </div>
                    <div className="h-4 bg-muted rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-1000 ease-out",
                          item.color
                        )}
                        style={{
                          width: usageVisible ? `${item.percentage}%` : '0%',
                          transitionDelay: `${index * 200 + 400}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Other Ways to Support
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Beyond financial donations, there are many ways to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild className="hover-lift">
              <a href="/get-involved">Volunteer Your Time</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover-lift">
              <a href="/contact">Corporate Giving</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover-lift">
              <a href="/contact">Legacy Giving</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Paystack Payment Dialog */}
      <Dialog open={showPayment} onOpenChange={setShowPayment}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="font-serif">Complete Your Donation</DialogTitle>
          </DialogHeader>
          <iframe
            src={PAYSTACK_URL}
            className="w-full h-[600px] border-0"
            title="Paystack Payment"
            allow="payment"
          />
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Donate;
