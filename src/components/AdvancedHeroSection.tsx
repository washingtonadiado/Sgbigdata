import { useState, useEffect } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import CustomButton from "@/components/ui/custom-button";

const slides = [
  {
    image: "/slide1.jpg",
    title: "DISCOVER",
    subheading: "Intelligence Beyond Data",
    description: "Discovering Endless Possibilities Through Research, Data & AI"
  },
  {
    image: "/slide2.jpg", 
    title: "INSIGHTS",
    subheading: "Data-Driven Solutions",
    description: "Empowering Organizations with Advanced Analytics"
  },
  {
    image: "/slide3.jpg",
    title: "FUTURE",
    subheading: "Ethical AI & Innovation", 
    description: "Building Tomorrow Through Responsible Technology"
  }
];

const AdvancedHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  
  const projectsCounter = useCountUp({ end: 500, duration: 2500, suffix: "+" });
  const organizationsCounter = useCountUp({ end: 50, duration: 2000, suffix: "+" });
  const satisfactionCounter = useCountUp({ end: 95, duration: 2200, suffix: "%" });

  // Function to start auto-advance
  const startAutoAdvance = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    const newInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    setIntervalId(newInterval);
  };

  useEffect(() => {
    // Initialize slider as ready
    setTimeout(() => setIsReady(true), 500);
    
    // Start auto-advance
    startAutoAdvance();

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    // Reset auto-advance timer
    startAutoAdvance();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    // Reset auto-advance timer
    startAutoAdvance();
  };

  const splitTitle = (title: string) => {
    return title.split('').map((letter, index) => (
      <span key={index}>{letter}</span>
    ));
  };

  return (
    <section className={`slider ${isReady ? 's--ready' : ''}`}>
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slider__slide ${
              index === currentSlide ? 's--active' : 
              index === (currentSlide - 1 + slides.length) % slides.length ? 's--prev' : ''
            }`}
          >
            <div className="slider__slide-content">
              <h3 className="slider__slide-subheading">
                {slide.subheading}
              </h3>
              <h2 className="slider__slide-heading">
                {splitTitle(slide.title)}
              </h2>
              <p className="slider__slide-readmore">
                {slide.description}
              </p>
              
              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
                <div className="bg-primary/20 rounded-lg p-4 border border-primary/30" ref={projectsCounter.ref}>
                  <div className="text-3xl font-bold text-white" style={{ textShadow: 'none', filter: 'none' }}>{projectsCounter.value}</div>
                  <div className="text-white/80 text-sm">Projects Delivered</div>
                </div>
                <div className="bg-secondary/20 rounded-lg p-4 border border-secondary/30" ref={organizationsCounter.ref}>
                  <div className="text-3xl font-bold text-white" style={{ textShadow: 'none', filter: 'none' }}>{organizationsCounter.value}</div>
                  <div className="text-white/80 text-sm">Organizations Served</div>
                </div>
                <div className="bg-navy/30 rounded-lg p-4 border border-navy/40" ref={satisfactionCounter.ref}>
                  <div className="text-3xl font-bold text-white" style={{ textShadow: 'none', filter: 'none' }}>{satisfactionCounter.value}</div>
                  <div className="text-white/80 text-sm">Client Satisfaction</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <CustomButton href="/services" size="lg">
                  Explore Solutions
                </CustomButton>
                <CustomButton href="/training" variant="secondary" size="lg">
                  Discover More
                </CustomButton>
              </div>
            </div>
            
            <div className="slider__slide-parts">
              {[1, 2, 3, 4].map((part) => (
                <div key={part} className="slider__slide-part">
                  <div 
                    className="slider__slide-part-inner"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="slider__control" onClick={prevSlide} />
      <div className="slider__control slider__control--right" onClick={nextSlide} />
    </section>
  );
};

export default AdvancedHeroSection;