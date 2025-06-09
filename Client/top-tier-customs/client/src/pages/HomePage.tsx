import Hero from "../components/Hero";
import FeaturedShowcase from "../components/FeaturedShowcase";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedShowcase />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
