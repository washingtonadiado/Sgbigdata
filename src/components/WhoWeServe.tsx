import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Building2, Users, Heart, GraduationCap } from "lucide-react";
import Icon3D from "@/components/ui/icon-3d";

const WhoWeServe = () => {
  const audiences = [
    {
      icon: Building2,
      title: "Governments and Public Sector Institutions",
      description:
        "Supporting data-driven policymaking, service delivery optimization, and digital transformation initiatives.",
      examples: "Policy research, citizen service analytics, digital governance frameworks"
    },
    {
      icon: Users,
      title: "Corporates",
      description:
        "Helping organizations leverage capacity building, research, analytics, AI, and governance to improve performance, manage risk, and scale responsibly.",
      examples: "Business intelligence, risk management, AI implementation, compliance"
    },
    {
      icon: Heart,
      title: "Development Organizations and NGOs",
      description:
        "Providing research, monitoring, evaluation, capacity building, and data governance solutions for social impact and inclusion.",
      examples: "Impact measurement, program evaluation, beneficiary analytics, donor reporting"
    },
    {
      icon: GraduationCap,
      title: "Academia and Research Institutions",
      description:
        "Partnering on scientific and applied research, data analysis, and capacity building initiatives.",
      examples: "Research methodology, statistical analysis, publication support, grant applications"
    },
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Who We Work With
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We partner with our clients across the world to unlock value from data while ensuring ethical use, regulatory compliance, and long-term sustainability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-texture"
            >
              <CardHeader>
                <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center mb-4">
                  <Icon3D 
                    icon={audience.icon} 
                    size="xl" 
                    variant="primary"
                    className="icon-3d-float"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm font-medium text-foreground mb-2">Examples:</p>
                  <p className="text-sm text-muted-foreground">{audience.examples}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
