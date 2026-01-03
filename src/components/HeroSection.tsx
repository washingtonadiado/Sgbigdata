import { ChevronDown } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useCountUp } from "@/hooks/useCountUp";
import CustomButton from "@/components/ui/custom-button";
import { useState, useEffect } from "react";

const slides = ["/Sliding 1.jpg", "/slide2.jpg", "/slide3.jpg"];

const textContent = [
  {
    title: "Discovering Endless Possibilities Through Research, Data & AI",
    subtitle: "We help governments, businesses, and social impact organizations transform research and data into actionable intelligence through strategy, capacity building, advanced analytics, intelligent automation, and governance."
  },
  {
    title: "Empowering Organizations with Data-Driven Insights",
    subtitle: "From policy research to business intelligence, we deliver practical solutions that turn complex data into clear, actionable strategies for sustainable growth and impact."
  },
  {
    title: "Building the Future Through Ethical AI & Analytics",
    subtitle: "Our comprehensive approach combines technical expertise with regulatory awareness, enabling confident decision-making in today's complex digital landscape."
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const projectsCounter = useCountUp({ end: 500, duration: 2500, suffix: "+" });
  const organizationsCounter = useCountUp({ end: 50, duration: 2000, suffix: "+" });
  const satisfactionCounter = useCountUp({ end: 95, duration: 2200, suffix: "%" });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      <Carousel
        className="absolute inset-0 w-full h-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-transparent text-white border-none h-12 w-12 hover:bg-white/10" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-transparent text-white border-none h-12 w-12 hover:bg-white/10" />
      </Carousel>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-hero-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
          Discovering Endless Possibilities Through Research, Data & AI
        </h1>
        
        <p className="text-lg md:text-xl text-hero-foreground/90 max-w-4xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          We help governments, businesses, and social impact organizations transform research and data into actionable intelligence through strategy, capacity building, advanced analytics, intelligent automation, and governance.
        </p>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4" ref={projectsCounter.ref}>
            <div className="text-3xl font-bold text-hero-foreground">{projectsCounter.value}</div>
            <div className="text-hero-foreground/80 text-sm">Projects Delivered</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4" ref={organizationsCounter.ref}>
            <div className="text-3xl font-bold text-hero-foreground">{organizationsCounter.value}</div>
            <div className="text-hero-foreground/80 text-sm">Organizations Served</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4" ref={satisfactionCounter.ref}>
            <div className="text-3xl font-bold text-hero-foreground">{satisfactionCounter.value}</div>
            <div className="text-hero-foreground/80 text-sm">Client Satisfaction</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
          <CustomButton href="/contact" size="lg">
            Book a Consultation
          </CustomButton>
          <CustomButton href="/contact" variant="secondary" size="lg">
            Contact Us
          </CustomButton>
        </div>

        <ChevronDown className="w-12 h-12 text-hero-foreground/60 mx-auto animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;


