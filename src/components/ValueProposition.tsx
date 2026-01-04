import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe, Shield, TrendingUp } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Build Internal Capability",
      description: "Strengthen your team's data and research skills for long-term success"
    },
    {
      icon: CheckCircle,
      title: "Make Better Decisions",
      description: "Transform complex data into clear, actionable insights leaders can trust"
    },
    {
      icon: Shield,
      title: "Operate with Confidence",
      description: "Ensure ethical use, regulatory compliance, and sustainable practices"
    },
    {
      icon: Globe,
      title: "Global Expertise, Local Compliance",
      description: "Partner with us worldwide while meeting local regulatory requirements"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image on the left */}
          <div className="text-center">
            <img src="/Value proposition.png" alt="Value Proposition" className="rounded-lg shadow-lg mx-auto" />
          </div>

          {/* Text content on the right */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Providing Insight Beyond Tomorrow
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              SG Big Data Research and Consulting helps clients build internal capability, make better decisions, 
              and operate with confidence by delivering practical research, data, and strategy solutions aligned 
              to contemporary and future needs.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              Our approach blends technical expertise, research rigor, and regulatory awareness, enabling clients 
              to make confident, evidence-based decisions in complex digital environments.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;