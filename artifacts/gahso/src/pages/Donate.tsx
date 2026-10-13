import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, GraduationCap, Home, CheckCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import heroDonate from "@/assets/hero-donate.jpg";
import donationCommunity from "@/assets/donation-community.jpg";

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
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] items-stretch overflow-hidden rounded-3xl bg-card shadow-[var(--card-shadow)]">
            {/* Community photo */}
            <div className="relative min-h-[340px] sm:min-h-[440px] lg:min-h-[720px] overflow-hidden">
              <img
                src={donationCommunity}
                alt="Community members taking part in a GAHSO gathering outdoors"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10 text-white">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                  Community-led change
                </p>
                <h2 className="max-w-lg text-3xl font-serif font-bold leading-tight sm:text-4xl">
                  Help create more opportunities for every community.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">
                  Your generosity supports practical, community-driven programs for young people and families.
                </p>
              </div>
            </div>

            {/* Donation form */}
            <div className="p-6 sm:p-8 md:p-10">
              <div className="mb-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                  Make a difference
                </p>
                <h2 className="text-2xl font-serif font-bold text-foreground sm:text-3xl">
                  Choose Your Impact Level
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Select a suggested gift or enter an amount that works for you.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {donationTiers.map((tier) => (
                  <button
                    key={tier.amount}
                    type="button"
                    aria-pressed={selectedAmount === tier.amount}
                    onClick={() => handleAmountSelect(tier.amount)}
                    className={cn(
                      "flex h-full flex-col rounded-xl border p-4 text-left transition-all duration-200",
                      selectedAmount === tier.amount
                        ? "border-primary bg-primary/5 ring-2 ring-primary/30"
                        : "border-border bg-background hover:border-primary/50 hover:bg-primary/[0.03]"
                    )}
                  >
                    <div className="mb-3 flex w-full items-center justify-between gap-3">
                      <span className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                        selectedAmount === tier.amount ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                      )}>
                        <tier.icon className="h-5 w-5" />
                      </span>
                      <span className="text-xl font-serif font-bold text-primary">{"$"}{tier.amount}</span>
                    </div>
                    <span className="font-serif font-bold text-foreground">{tier.title}</span>
                    <span className="mt-1 text-xs leading-relaxed text-muted-foreground">{tier.description}</span>
                    <span className="mt-3 text-xs font-medium leading-relaxed text-primary">{tier.impact}</span>
                  </button>
                ))}
              </div>

              <div className="mt-5">
                <label htmlFor="custom-donation-amount" className="mb-2 block text-sm font-medium text-foreground">
                  Or enter a custom amount
                </label>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-muted-foreground transition-colors group-focus-within:text-primary">
                    $
                  </span>
                  <input
                    id="custom-donation-amount"
                    type="number"
                    value={customAmount}
                    onChange={(e) => handleCustomAmount(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background py-3 pl-10 pr-4 text-xl font-bold transition-all focus:border-transparent focus:ring-2 focus:ring-primary"
                    placeholder="Enter amount"
                    min="1"
                    step="1"
                    inputMode="numeric"
                  />
                </div>
              </div>

              {displayAmount && displayAmount > 0 && (
                <div className="mt-5 rounded-xl bg-primary/10 p-4 text-center animate-scale-in">
                  <div className="mb-1 text-sm text-muted-foreground">Your donation</div>
                  <div className="text-3xl font-serif font-bold text-primary">{"$"}{displayAmount}</div>
                </div>
              )}

              <div className="mt-5 space-y-3">
                <Button
                  variant="donate"
                  size="xl"
                  className="w-full"
                  onClick={() => setShowPayment(true)}
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Donate Now
                </Button>
                <p className="text-center text-xs leading-relaxed text-muted-foreground">
                  Secure payment powered by Paystack. Supports cards, mobile money, and bank transfers.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 border-t border-border pt-5">
                <div className="mb-3 text-sm font-medium text-foreground">Your donation is safe</div>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {trustIndicators.map((indicator) => (
                    <li key={indicator} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      {indicator}
                    </li>
                  ))}
                </ul>
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
            <div data-aidos-widget-type="donation_form" data-aidos-campaign="camp_01M4GD62WPDXGQPTS0X3QCK3VG" data-aidos-widget-id="widget_01M4TBXMQG4YB45BTNJF6J7FBF"></div>
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
