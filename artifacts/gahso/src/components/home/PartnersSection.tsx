import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import partnerShofco from "@/assets/partner-shofco.jpg";
import partnerBasicInternet from "@/assets/partner-basic-internet.png";
import partnerGwcn from "@/assets/partner-gwcn.png";
import partnerPrecious from "@/assets/partner-precious.png";
import partnerWelthungerhilfe from "@/assets/partner-welthungerhilfe.jpg";
import partnerSdsn from "@/assets/partner-sdsn.png";
import partnerWabibiPads from "@/assets/partner-wabibi-pads.jpg";

const partners = [
  { name: "SHOFCO", logo: partnerShofco },
  { name: "Basic Internet Foundation", logo: partnerBasicInternet },
  { name: "Global Waste Cleaning Network", logo: partnerGwcn },
  { name: "Precious Gems", logo: partnerPrecious },
  { name: "Welthungerhilfe", logo: partnerWelthungerhilfe },
  { name: "SDSN Youth", logo: partnerSdsn },
  { name: "Wabibi Pads", logo: partnerWabibiPads },
];

export function PartnersSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  // Duplicate the partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section ref={sectionRef} className="section-padding py-16 bg-muted overflow-hidden">
      <div className="container-wide">
        <div
          className={cn(
            "text-center mb-10 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Trusted by Leading Organizations
          </span>
        </div>
      </div>

      {/* Infinite scroll container */}
      <div
        className={cn(
          "relative transition-all duration-700 delay-200",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling track */}
        <div className="flex animate-scroll-left">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-6 md:mx-10"
            >
              <div className="w-32 h-20 md:w-40 md:h-24 rounded-xl bg-card shadow-sm flex items-center justify-center border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:scale-110 hover:-translate-y-1 p-4 group">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-wide">
        <p
          className={cn(
            "text-center mt-10 text-muted-foreground text-sm transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          And many more development partners working together for lasting change
        </p>
      </div>
    </section>
  );
}
