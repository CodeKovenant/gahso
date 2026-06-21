import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "GAHSO gave me the confidence and skills to become a leader in my community. Today, I mentor other young people and help them discover their potential.",
    name: "Sarah Wanjiku",
    role: "Youth Leadership Graduate, Nairobi",
  },
  {
    quote: "The tailoring skills I learned through the women's empowerment program changed my life. I now run my own business and support my family.",
    name: "Grace Akinyi",
    role: "Women Empowerment Beneficiary",
  },
  {
    quote: "For the first time, I felt truly included. GAHSO showed me that my disability doesn't define my capabilities - my determination does.",
    name: "Peter Omondi",
    role: "Disability Inclusion Advocate",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="section-padding bg-secondary">
      <div className="container-wide">
        <div
          className={cn(
            "text-center mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-secondary-foreground/80 font-semibold uppercase tracking-wider text-sm mb-2 block">
            Voices of Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-foreground">
            Stories of Transformation
          </h2>
        </div>

        <div
          className={cn(
            "max-w-4xl mx-auto transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          )}
        >
          <div className="relative card-elevated p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 md:left-12">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="pt-4">
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-serif italic">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="font-bold text-foreground text-lg">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[activeIndex].role}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === activeIndex
                            ? "bg-primary w-6"
                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
