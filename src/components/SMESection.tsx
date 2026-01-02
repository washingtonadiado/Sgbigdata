import { CheckCircle, TrendingUp, Users, Zap } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import CustomButton from "@/components/ui/custom-button";

const SMESection = () => {
  const revenueCounter = useCountUp({ end: 35, duration: 2000, suffix: "%" });
  const projectsCounter = useCountUp({ end: 24, duration: 1500 });
  const growthCounter = useCountUp({ end: 12, duration: 1800, suffix: "%" });
  const satisfactionCounter = useCountUp({ end: 98, duration: 2200, suffix: "%" });
  const features = [
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "Transform your business data into actionable intelligence"
    },
    {
      icon: Users,
      title: "Team Training",
      description: "Upskill your team with practical data literacy programs"
    },
    {
      icon: Zap,
      title: "Quick Implementation",
      description: "Get up and running with minimal complexity and cost"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Data Smart Starter Kit for SMEs
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Not every business needs enterprise-scale analytics. Our{" "}
              <span className="text-primary font-semibold">Data Smart Starter Kit</span> is a
              practical, jargon-free solution designed specifically for growing teams to make better, 
              faster decisions using their data.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <CustomButton href="/contact" size="lg">
                Get Started Today
              </CustomButton>
              <CustomButton href="/services" size="lg">
                Learn More
              </CustomButton>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl shadow-2xl p-8 border border-border">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <h3 className="text-xl font-bold text-foreground">Business Dashboard</h3>
                  <span className="text-sm text-primary font-semibold" ref={revenueCounter.ref}>
                    Revenue Growth <span className="text-2xl">+{revenueCounter.value}</span>
                  </span>
                </div>

                <div className="grid grid-cols-6 gap-2">
                  {[120, 160, 140, 180, 200, 220].map((height, i) => (
                    <div key={i} className="flex flex-col items-center justify-end h-40">
                      <div
                        className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t transition-all duration-300 hover:from-primary/80 hover:to-primary/40"
                        style={{ height: `${height}px` }}
                      />
                      <span className="text-xs text-muted-foreground mt-2">Q{i+1}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-muted rounded-lg p-4" ref={projectsCounter.ref}>
                    <p className="text-sm text-muted-foreground mb-2">Active Projects</p>
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-bold text-foreground">{projectsCounter.value}</div>
                      <div className="flex items-center gap-1 text-green-600" ref={growthCounter.ref}>
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm">+{growthCounter.value}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-4" ref={satisfactionCounter.ref}>
                    <p className="text-sm text-muted-foreground mb-2">Client Satisfaction</p>
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-bold text-foreground">{satisfactionCounter.value}</div>
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMESection;
