import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhoWeServe from "@/components/WhoWeServe";
import WhatWeDo from "@/components/WhatWeDo";
import SMESection from "@/components/SMESection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhoWeServe />
      <WhatWeDo />
      <SMESection />
      <Footer />
    </div>
  );
};

export default Index;
