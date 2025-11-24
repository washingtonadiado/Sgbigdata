import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Briefcase, Bot, Rocket } from "lucide-react";

const WhoWeServe = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Corporate Enterprises",
      description:
        "Align with regulatory frameworks like GDPR and Kenya's Data Protection Act using proven data governance strategies.",
    },
    {
      icon: Bot,
      title: "Tech-Driven Companies",
      description:
        "Scale faster with AI, predictive analytics, and smart automation to enhance performance and customer experiences.",
    },
    {
      icon: Rocket,
      title: "SMEs & Startups",
      description:
        "Make smarter, affordable decisions with our practical 'Data Smart Starter Kit' tailored to your growth stage.",
    },
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We work with forward-thinking organizations, from corporations and startups to tech
            innovators, to help them transform data into meaningful impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center text-foreground">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
