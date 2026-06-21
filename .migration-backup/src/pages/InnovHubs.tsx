import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { MessageSquare, LayoutGrid, AppWindow, Settings, Mail, Phone, Linkedin, Facebook, Instagram, BarChart3 } from "lucide-react";
import founderImg from "@/assets/chiefcode-founder.jpg";
import awardImg from "@/assets/innovhubs-award.jpg";
import officeImg from "@/assets/innovhubs-office.jpg";
import codingBoardImg from "@/assets/chiefcode-coding-board.jpg";
import deskWorkImg from "@/assets/chiefcode-desk-work.jpg";
import dualScreensImg from "@/assets/chiefcode-dual-screens.jpg";
import codeCloseupImg from "@/assets/chiefcode-code-closeup.jpg";
import nightCodingImg from "@/assets/chiefcode-night-coding.jpg";

const services = [
  {
    icon: MessageSquare,
    title: "App Consultancy",
    description: "We help you define the best features for your app.",
  },
  {
    icon: LayoutGrid,
    title: "UX and UI Design",
    description: "We provide outstanding app design for your users.",
  },
  {
    icon: AppWindow,
    title: "App Development",
    description: "We employ a team of experts to build your app.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "We turn your data into actionable insights for smarter decisions.",
  },
];

const slideshowImages = [codingBoardImg, deskWorkImg, dualScreensImg, codeCloseupImg, nightCodingImg];

const InnovHubs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroAnimation = useScrollAnimation();
  const storyAnimation = useScrollAnimation();
  const quoteAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const galleryAnimation = useScrollAnimation();
  const awardAnimation = useScrollAnimation();
  const contactAnimation = useScrollAnimation();
  const footerAnimation = useScrollAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Section - Slideshow background */}
      <section
        ref={heroAnimation.ref}
        className={cn(
          "relative min-h-[70vh] flex items-center text-white overflow-hidden transition-all duration-700",
          heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {/* Slideshow background images */}
        {slideshowImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a5f67]/90 via-[#0c717b]/80 to-[#0e8a8f]/70" />
        <div className="container-wide section-padding py-16 md:py-20 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-10">
              <Settings className="w-10 h-10 text-white" />
              <span className="text-2xl font-bold tracking-tight">
                ChiefCode Labs
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-10">
              Changing the world{" "}
              <span className="font-extrabold">one app at a time</span>
            </h1>
            <a
              href="#story"
              className="inline-flex items-center px-10 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-colors text-lg tracking-wide"
            >
              LEARN MORE
            </a>
          </div>
          {/* Slideshow dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {slideshowImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Company Story - Text left, founder photo right */}
      <section
        id="story"
        ref={storyAnimation.ref}
        className={cn(
          "py-20 bg-white transition-all duration-700",
          storyAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="container-wide section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c717b] mb-8">
                Our Company Story
              </h2>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                ChiefCode Lab, a dynamic startup at the forefront of innovation, is transforming technology into solutions that matter. Founded by a visionary Chief Technology Officer—who also serves as Director of Programs at the Global Alliance for a Healthy Society (GAHSO)—the lab develops cutting-edge AgriSmart tech to empower agripreneurs and implements digital solutions for sexual and reproductive health programs across marginalized communities. At its core, ChiefCode Lab combines the brilliance of software engineers, data analysts, and data engineers to design scalable, data-driven platforms that tackle real-world challenges, bridging technology and social impact in Kenya and beyond.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="rounded-3xl overflow-hidden w-72 h-96 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
                <img
                  src={founderImg}
                  alt="ChiefCode Labs founder"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner with code background */}
      <section
        ref={quoteAnimation.ref}
        className={cn(
          "relative py-20 text-white transition-all duration-700 overflow-hidden",
          quoteAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <img
          src={codeCloseupImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a5f67]/80" />
        <div className="container-wide section-padding text-center max-w-4xl mx-auto relative z-10">
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed">
            <span className="font-bold">Technology</span> isn't about the latest gadgets or apps. It's about what these things do for people. It's about bringing people together and{" "}
            <span className="font-bold">making lives better</span>.
          </p>
        </div>
      </section>

      {/* Services - with code background */}
      <section
        ref={servicesAnimation.ref}
        className={cn(
          "relative py-20 transition-all duration-700 overflow-hidden",
          servicesAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <img
          src={codingBoardImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90" />
        <div className="container-wide section-padding relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c717b] mb-12 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#0c717b] rounded-3xl p-8 text-white border-2 border-white/30 hover:bg-[#0a5f67] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.03] flex flex-col justify-between min-h-[280px]"
              >
                <div className="w-20 h-20 rounded-2xl border-2 border-white/50 flex items-center justify-center">
                  <service.icon className="w-10 h-10 text-white/80" />
                </div>
                <div className="mt-auto">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Office Image */}
      <section
        ref={galleryAnimation.ref}
        className={cn(
          "transition-all duration-700",
          galleryAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <img
          src={officeImg}
          alt="Office workspace"
          className="w-full h-[400px] md:h-[500px] object-cover"
        />
      </section>

      {/* Award Section */}
      <section
        ref={awardAnimation.ref}
        className={cn(
          "relative py-20 bg-white transition-all duration-700 overflow-hidden",
          awardAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {/* Tech contour lines background */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <path d="M0 100 H200 V250 H400 V150 H600 V300 H800" stroke="#0c717b" strokeWidth="2" />
          <path d="M0 200 H150 V350 H350 V200 H500 V400 H700 V250 H800" stroke="#0c717b" strokeWidth="1.5" />
          <path d="M0 400 H100 V300 H300 V450 H500 V350 H650 V500 H800" stroke="#0c717b" strokeWidth="2" />
          <path d="M0 500 H250 V400 H450 V550 H650 V450 H800" stroke="#0c717b" strokeWidth="1.5" />
          <circle cx="200" cy="250" r="5" fill="#0c717b" />
          <circle cx="400" cy="150" r="4" fill="#0c717b" />
          <circle cx="600" cy="300" r="5" fill="#0c717b" />
          <circle cx="150" cy="350" r="4" fill="#0c717b" />
          <circle cx="500" cy="400" r="5" fill="#0c717b" />
          <circle cx="300" cy="450" r="4" fill="#0c717b" />
          <circle cx="650" cy="500" r="5" fill="#0c717b" />
          <rect x="395" y="195" width="10" height="10" rx="2" fill="#0c717b" />
          <rect x="495" cy="345" width="10" height="10" rx="2" fill="#0c717b" />
          <path d="M100 50 V150 H250" stroke="#0c717b" strokeWidth="1" strokeDasharray="8 4" />
          <path d="M700 50 V200 H550 V350" stroke="#0c717b" strokeWidth="1" strokeDasharray="8 4" />
          <path d="M50 550 H200 V450" stroke="#0c717b" strokeWidth="1" strokeDasharray="8 4" />
          <path d="M750 550 V400 H600" stroke="#0c717b" strokeWidth="1" strokeDasharray="8 4" />
        </svg>
        <div className="container-wide section-padding relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c717b] mb-6">
                Tech Awards 2030:<br />
                Startup of the Year
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                This achievement is a reminder of our commitment to pushing boundaries, collaborating boldly, and shaping a smarter, more inclusive future.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={awardImg}
                alt="Tech Awards 2030"
                className="max-w-xs w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Connect with Us */}
      <section
        ref={contactAnimation.ref}
        className={cn(
          "relative py-20 bg-white transition-all duration-700 overflow-hidden",
          contactAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {/* Tech contour lines background */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <path d="M0 150 H180 V300 H380 V200 H580 V350 H800" stroke="#0c717b" strokeWidth="2" />
          <path d="M0 300 H120 V180 H320 V330 H520 V230 H720 V380 H800" stroke="#0c717b" strokeWidth="1.5" />
          <path d="M0 450 H220 V350 H420 V500 H620 V400 H800" stroke="#0c717b" strokeWidth="2" />
          <circle cx="180" cy="300" r="5" fill="#0c717b" />
          <circle cx="380" cy="200" r="4" fill="#0c717b" />
          <circle cx="580" cy="350" r="5" fill="#0c717b" />
          <circle cx="320" cy="330" r="4" fill="#0c717b" />
          <circle cx="620" cy="400" r="5" fill="#0c717b" />
          <rect x="515" y="225" width="10" height="10" rx="2" fill="#0c717b" />
          <path d="M50 50 V200 H200" stroke="#0c717b" strokeWidth="1" strokeDasharray="8 4" />
          <path d="M750 100 V250 H600 V400" stroke="#0c717b" strokeWidth="1" strokeDasharray="8 4" />
          <path d="M100 550 H300 V450" stroke="#0c717b" strokeWidth="1" strokeDasharray="8 4" />
        </svg>
        <div className="container-wide section-padding relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c717b] mb-16">
            Connect with Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <p className="text-[#0c717b] font-semibold mb-1">Email Address</p>
                <a href="mailto:chiefcodelab@gmail.com" className="text-gray-800 hover:text-[#0c717b] transition-colors">
                  chiefcodelab@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[#0c717b] font-semibold mb-1">Phone Number</p>
                <a href="tel:+254114858021" className="text-gray-800 hover:text-[#0c717b] transition-colors">
                  (254) 114 858 021
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <a href="#" className="block text-gray-800 hover:text-[#0c717b] transition-colors text-lg">
                LinkedIn
              </a>
              <a href="#" className="block text-gray-800 hover:text-[#0c717b] transition-colors text-lg">
                Facebook
              </a>
              <a href="#" className="block text-gray-800 hover:text-[#0c717b] transition-colors text-lg">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section
        ref={footerAnimation.ref}
        className={cn(
          "relative py-24 bg-gradient-to-r from-[#0a5f67] via-[#0c717b] to-[#0e8a8f] text-white overflow-hidden transition-all duration-700",
          footerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {/* Decorative diamond pattern */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 opacity-30">
          <svg viewBox="0 0 400 400" className="w-full h-full" fill="white">
            {Array.from({ length: 15 }).map((_, row) =>
              Array.from({ length: 15 }).map((_, col) => {
                const x = col * 28 + (row % 2 ? 14 : 0);
                const y = row * 28;
                if (x > row * 28 + 30) return null;
                return (
                  <rect
                    key={`${row}-${col}`}
                    x={x}
                    y={y}
                    width="8"
                    height="8"
                    transform={`rotate(45 ${x + 4} ${y + 4})`}
                  />
                );
              })
            )}
          </svg>
        </div>
        <div className="container-wide section-padding flex justify-end items-center relative z-10">
          <div className="flex items-center gap-3">
            <Settings className="w-8 h-8 text-white" />
            <span className="text-xl font-bold tracking-tight">
              ChiefCode Labs
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InnovHubs;
