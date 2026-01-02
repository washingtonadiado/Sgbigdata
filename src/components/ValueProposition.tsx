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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Providing Insight Beyond Tomorrow
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            SG Big Data Research and Consulting helps clients build internal capability, make better decisions, 
            and operate with confidence by delivering practical research, data, and strategy solutions aligned 
            to contemporary and future needs.
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Our approach blends technical expertise, research rigor, and regulatory awareness, enabling clients 
            to make confident, evidence-based decisions in complex digital environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-texture">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;