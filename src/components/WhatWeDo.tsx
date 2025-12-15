import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WhatWeDo = () => {
  const services = [
    {
      title: "Business Analytics & BI",
      description:
        "Transform raw data into actionable insights with powerful business intelligence solutions. We help you build dashboards, reports, and analytics frameworks that drive informed decision-making across your organization.",
    },
    {
      title: "Business Data Strategy & Research",
      description:
        "Develop comprehensive data strategies aligned with your business goals. Our research-driven approach helps you understand your data landscape, identify opportunities, and create roadmaps for data-driven transformation.",
    },
    {
      title: "Data Governance & Compliance",
      description:
        "Ensure data quality, security, and compliance with regulatory frameworks including GDPR and Kenya's Data Protection Act. We implement robust governance frameworks that protect your data assets while enabling business agility.",
    },
    {
      title: "AI Solutions & Automation",
      description:
        "Leverage artificial intelligence and machine learning to automate processes, predict trends, and enhance customer experiences. From chatbots to predictive analytics, we bring AI capabilities to your business.",
    },
    {
      title: "Training & Capacity Building",
      description:
        "Empower your team with data literacy and technical skills. Our training programs cover data analysis, visualization, governance, and AI fundamentals, tailored to different skill levels and roles.",
    },
    {
      title: "Scientific Research",
      description:
        "Conduct rigorous scientific research and studies leveraging advanced statistical methods and data science techniques. We support academic institutions, NGOs, and organizations in evidence-based research initiatives.",
    },
  ];

  return (
    <section className="py-20 bg-muted" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer strategy-driven, practical, and scalable data solutions tailored to your
            organization's needs, no matter the size or sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col group transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 bg-gradient-to-br from-card to-card/90">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
