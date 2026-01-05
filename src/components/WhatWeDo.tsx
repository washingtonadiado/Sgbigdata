import { Card } from "@/components/ui/card";
import { BarChart3, Brain, GraduationCap, Search, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Icon3D from "@/components/ui/icon-3d";
import EnhancedScrollAnimation from "@/components/EnhancedScrollAnimation";

const WhatWeDo = () => {
  const services = [
    {
      icon: Search,
      title: "Research & Evidence-Based Advisory",
      description: "High-quality research that informs policy, strategy, and investment decisions."
    },
    {
      icon: BarChart3,
      title: "Data Analytics and Business Intelligence",
      description: "Transform raw data into clear, decision-ready insights through advanced analytics."
    },
    {
      icon: GraduationCap,
      title: "Training and Digital Skills Capacity Building",
      description: "Strengthen institutional capability through practical data analytics and AI literacy programs."
    },
    {
      icon: Brain,
      title: "AI Solutions, Model Training, and Automation",
      description: "Responsible AI adoption and automation to improve efficiency and decision-making."
    },
    {
      icon: Shield,
      title: "Data Protection, Governance, and Compliance",
      description: "Build trusted data environments with strong governance frameworks and compliance support."
    }
  ];

  return (
    <section className="py-20 bg-muted" id="services">
      <div className="container mx-auto px-4">
        <EnhancedScrollAnimation animation="fadeInUp" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Core Services Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We support governments, business enterprises, and social impact organizations through our core integrated service areas to deliver measurable results and long-term value.
            </p>
          </div>
        </EnhancedScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <EnhancedScrollAnimation 
              key={index} 
              animation="slideInUp" 
              delay={0.1 + (index * 0.1)}
            >
              <Link to="/services" className="group block h-full">
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-texture cursor-pointer">
                  <div className="p-6 text-center h-full flex flex-col">
                    <div className="w-16 h-16 rounded-lg bg-primary/5 flex items-center justify-center mx-auto mb-4">
                      <Icon3D 
                        icon={service.icon} 
                        size="lg" 
                        variant="primary"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors flex-grow">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-center text-primary text-sm font-medium group-hover:gap-2 transition-all mt-auto">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            </EnhancedScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
