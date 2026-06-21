import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PartnersSection } from "@/components/home/PartnersSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ProgramsSection />
      <TestimonialsSection />
      <PartnersSection />
    </Layout>
  );
};

export default Index;
