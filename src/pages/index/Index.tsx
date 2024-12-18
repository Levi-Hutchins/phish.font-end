import { Hero } from "@/pages/index/Hero";
import { IndexFeatures } from "@/pages/index/IndexFeatures";
import { HowItWorks } from "@/pages/how-it-works/HowItWorks";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <IndexFeatures />
      {/* <HowItWorks /> */}
    </div>
  );
};

export default Index;