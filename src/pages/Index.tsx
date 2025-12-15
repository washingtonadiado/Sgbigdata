import HeroSection from "@/components/HeroSection";
import WhoWeServe from "@/components/WhoWeServe";
import WhatWeDo from "@/components/WhatWeDo";
import SMESection from "@/components/SMESection";
import ScrollAnimation from "@/components/ScrollAnimation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ScrollAnimation>
        <WhoWeServe />
      </ScrollAnimation>
      <ScrollAnimation>
        <WhatWeDo />
      </ScrollAnimation>
      <ScrollAnimation>
        <SMESection />
      </ScrollAnimation>
    </div>
  );
};

export default Index;
