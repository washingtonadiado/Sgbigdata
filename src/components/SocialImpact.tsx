import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Shield, Globe } from "lucide-react";
import Icon3D from "@/components/ui/icon-3d";
import { useCountUp } from "@/hooks/useCountUp";

const SocialImpact = () => {
  const complianceCounter = useCountUp({ end: 100, duration: 2000, suffix: "%" });
  const initiativesCounter = useCountUp({ end: 40, duration: 1800, suffix: "+" });
  const principles = [
    {
      icon: Heart,
      title: "Social Inclusion",
      description: "Ensuring digital transformation benefits all communities, especially marginalized groups"
    },
    {
      icon: Users,
      title: "Diversity in Technology",
      description: "Promoting diverse perspectives in AI development and data science practices"
    },
    {
      icon: Shield,
      title: "Ethical AI",
      description: "Implementing responsible AI frameworks that prioritize fairness and transparency"
    },
    {
      icon: Globe,
      title: "Responsible Data Governance",
      description: "Protecting privacy while enabling innovation for societal benefit"
    }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Advancing Ethical, Inclusive, and Responsible Data Use
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            We believe research, data and AI should drive inclusive growth, not deepen inequality. 
            Our work integrates principles of social inclusion, diversity in technology, ethical AI, 
            and responsible data governance, ensuring digital transformation benefits people as much as systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {principles.map((principle, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-texture">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center mb-4 mx-auto">
                  <Icon3D 
                    icon={principle.icon} 
                    size="xl" 
                    variant="primary"
                    className="icon-3d-float"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl shadow-lg p-8 max-w-4xl mx-auto card-texture">
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2" ref={complianceCounter.ref}>
                {complianceCounter.value}
              </div>
              <div className="text-sm text-muted-foreground">Ethical AI Framework Compliance</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2" ref={initiativesCounter.ref}>
                {initiativesCounter.value}
              </div>
              <div className="text-sm text-muted-foreground">Inclusive Technology Initiatives</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;