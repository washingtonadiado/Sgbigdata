import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeServe from "@/components/WhoWeServe";
import SocialImpact from "@/components/SocialImpact";
import Testimonials from "@/components/Testimonials";
import SMESection from "@/components/SMESection";
import ScrollAnimation from "@/components/ScrollAnimation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ScrollAnimation>
        <ValueProposition />
      </ScrollAnimation>
      <ScrollAnimation>
        <WhatWeDo />
      </ScrollAnimation>
      <ScrollAnimation>
        <WhoWeServe />
      </ScrollAnimation>
      <ScrollAnimation>
        <SocialImpact />
      </ScrollAnimation>
      <ScrollAnimation>
        <SMESection />
      </ScrollAnimation>
      <ScrollAnimation>
        <Testimonials />
      </ScrollAnimation>
    </div>
  );
};

export default Index;
