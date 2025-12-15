import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const slides = ["/Sliding 1.jpg", "/slide2.jpg", "/slide3.jpg"];

const HeroSection = () => {
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
        <h1 className="text-5xl md:text-7xl font-bold text-hero-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Providing Insight Beyond Tomorrow
        </h1>
        
        <p className="text-lg md:text-xl text-hero-foreground/90 max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          We empower organizations to turn data into smarter decisions through strategy,
          governance, analytics, and automation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button size="lg" className="rounded-full px-8 text-base">
            Book a Consultation
          </Button>
          <Button 
            size="lg" 
            variant="secondary" 
            className="rounded-full px-8 text-base"
          >
            Chat via Whatsapp
          </Button>
        </div>

        <ChevronDown className="w-12 h-12 text-hero-foreground/60 mx-auto animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;

