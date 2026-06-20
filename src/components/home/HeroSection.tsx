import { Link } from "react-router-dom";
import { Heart, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback } from "react";

// Import all hero slides
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import heroSlide5 from "@/assets/hero-slide-5.jpg";
import heroSlide6 from "@/assets/hero-slide-6.jpg";
import heroSlide7 from "@/assets/hero-slide-7.jpg";
import heroSlide8 from "@/assets/hero-slide-8.jpg";
import heroSlide9 from "@/assets/hero-slide-9.jpg";

const heroImages = [
  heroSlide1,
  heroSlide2,
  heroSlide3,
  heroSlide4,
  heroSlide5,
  heroSlide6,
  heroSlide7,
  heroSlide8,
  heroSlide9,
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroImages.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + heroImages.length) % heroImages.length);
  }, [currentSlide, goToSlide]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Slideshow with Ken Burns Effect */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide 
                ? "opacity-100" 
                : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`GAHSO community activities - slide ${index + 1}`}
              className={`w-full h-full object-cover ${
                index === currentSlide ? "animate-ken-burns" : ""
              }`}
              style={{
                animationDelay: index === currentSlide ? "0s" : "0s",
              }}
            />
          </div>
        ))}
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-transparent to-foreground/50" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/20 backdrop-blur-sm border border-background/30 text-background hover:bg-background/30 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/20 backdrop-blur-sm border border-background/30 text-background hover:bg-background/30 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? "w-8 h-2 bg-primary" 
                : "w-2 h-2 bg-background/50 hover:bg-background/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide section-padding">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary-foreground text-sm font-medium">Youth-Led Since 2016</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-background leading-tight mb-6 animate-slide-up">
            Empowering Youth.
            <br />
            <span className="text-primary">Transforming</span> Communities.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-background/80 mb-8 max-w-xl animate-slide-up stagger-1">
            Global Alliance for a Healthy Society (GAHSO) is a youth-led Public Benefit Organization (PBO) operating in Kenya and UK, dedicated to empowering marginalized communities through evidence-based, community-driven programs that advance the wellbeing, rights, and opportunities of girls, women, and youth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-2">
            <Button variant="hero" asChild>
              <Link to="/donate" className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Donate Now
              </Link>
            </Button>
            <Button variant="heroOutline" asChild>
              <Link to="/get-involved" className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Get Involved
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
