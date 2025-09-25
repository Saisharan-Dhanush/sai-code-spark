import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ProductFeatures from "@/components/ProductFeatures";
import CaseStudies from "@/components/CaseStudies";
import DemoSection from "@/components/DemoSection";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ProductFeatures />
        <CaseStudies />
        <DemoSection />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
