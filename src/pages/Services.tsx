import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Database, Shield, Bot, GraduationCap, FlaskConical, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollAnimation from "@/components/ScrollAnimation";

const services = [
  {
    icon: BarChart3,
    title: "Business Analytics & Business Intelligence",
    description: "Turn your data into powerful, decision-ready insights. We design end-to-end BI solutions that align with your strategic goals and empower real-time decision-making.",
    offerings: [
      "Custom dashboard design and implementation (Power BI, Tableau)",
      "Real-time KPI tracking and performance monitoring",
      "Data visualization for impact-driven conversations",
      "Predictive and prescriptive analytics using Python and AI tools",
    ],
  },
  {
    icon: Database,
    title: "Business Data Strategy & Research",
    description: "Build a data ecosystem that accelerates growth. Our frameworks align your data lifecycle, research needs, and operational goals with smart, scalable architecture.",
    offerings: [
      "Data lifecycle planning and architectural design",
      "Market and operational research using quantitative & qualitative methods",
      "Data maturity assessments to identify growth gaps",
      "Evidence-based decision support for executives and teams",
    ],
  },
  {
    icon: Shield,
    title: "Data Governance & Compliance Advisory",
    description: "Stay ahead of regulatory risks. We help you align with data privacy laws like GDPR and Kenya's DPA by building governance frameworks that ensure ethical and secure data use.",
    offerings: [
      "Data governance policy design and role definitions",
      "Compliance audits (GDPR, HIPAA, Kenya DPA)",
      "Privacy Impact Assessments (PIAs) for risk mitigation",
      "Risk and control mapping to strengthen resilience",
    ],
  },
  {
    icon: Bot,
    title: "AI Solutions & Automation",
    description: "Streamline your operations with ethical, value-driven AI. From chatbots to machine learning models, we help you apply AI tools that solve real business problems responsibly.",
    offerings: [
      "AI-powered workflow and process automation",
      "Custom machine learning models trained on your business data",
      "Natural Language Processing (NLP) for smart interactions",
      "AI Ethics and Responsible AI consulting",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Capacity Building",
    description: "Empower your teams with future-ready data and AI skills. Our practical, hands-on training programs are tailored to your staff's level and your business objectives.",
    offerings: [
      "Corporate training in data analytics, AI, and compliance",
      "Workshops and bootcamps for immediate upskilling",
      "Executive and leadership data literacy coaching",
      "Custom learning paths aligned to real use-cases",
    ],
  },
  {
    icon: FlaskConical,
    title: "Scientific Research Support",
    description: "From idea to publication, we support research initiatives with robust design, analytics, and reporting services tailored to academic and industry needs.",
    offerings: [
      "Quantitative and qualitative research design",
      "End-to-end survey development, data cleaning, and analytics",
      "Academic-industry collaboration and grant support",
      "Publication-ready reports, manuscripts, and client deliverables",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-teal">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We deliver data strategy, analytics, automation, and compliance solutions that scale with your organization — whether you're just getting started or building enterprise intelligence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <ScrollAnimation>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 items-start ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-teal" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <Card className={`${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <span className="text-orange">What We Offer:</span>
                      </h3>
                      <ul className="space-y-3">
                        {service.offerings.map((offering, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{offering}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gradient-to-r from-teal to-teal/80">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Ready to Make
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Smarter Decisions?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your data into strategic advantage
            </p>
            <Link to="/about">
              <Button size="lg" className="bg-white text-teal hover:bg-gray-100 font-semibold px-8">
                Talk to Us
              </Button>
            </Link>
          </div>
        </section>
      </ScrollAnimation>

    </div>
  );
};

export default Services;
