import HeroSection from "@/components/HeroSection";
import WhoWeServe from "@/components/WhoWeServe";
import WhatWeDo from "@/components/WhatWeDo";
import SMESection from "@/components/SMESection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhoWeServe />
      <WhatWeDo />
      <SMESection />
    </div>
  );
};

export default Index;
