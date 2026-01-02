import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, BarChart3, Brain, GraduationCap, Search, Shield } from "lucide-react";
import CustomButton from "@/components/ui/custom-button";

const WhatWeDo = () => {
  const services = [
    {
      icon: Search,
      title: "Research & Evidence-Based Advisory",
      description:
        "We design and deliver high-quality research that informs policy, strategy, and investment decisions, transforming complex datasets into insights leaders can trust and act upon.",
      includes: [
        "Questionnaire and survey design",
        "Data collection tools and methodologies", 
        "Quantitative, qualitative, and mixed methods data analysis",
        "Research reporting and insight visualization"
      ],
      results: "Helped 15+ government agencies improve policy outcomes by 40%"
    },
    {
      icon: BarChart3,
      title: "Data Analytics and Business Intelligence",
      description:
        "We help organizations move from raw data to clear, decision-ready insights through advanced analytics, interactive dashboards, and executive reporting.",
      includes: [
        "Data preparation, cleaning, and organization",
        "Descriptive, diagnostic, predictive, and prescriptive analytics",
        "Interactive dashboards (Power BI, Tableau, Excel, R-Language, Python)",
        "Executive-ready reporting and insight storytelling",
        "Data quality assessment and optimization"
      ],
      results: "Increased decision-making speed by 60% for 25+ enterprises"
    },
    {
      icon: GraduationCap,
      title: "Training and Digital Skills Capacity Building",
      description:
        "Through our digital school, SG Data School, we strengthen institutional capability by equipping teams with practical skills in data analytics, research, AI literacy, and digital transformation.",
      includes: [
        "Corporate and public sector training",
        "Data analytics and research skills programs",
        "AI literacy and digital transformation workshops",
        "Custom learning pathways"
      ],
      results: "Trained 1000+ professionals across 30+ organizations"
    },
    {
      icon: Brain,
      title: "AI Solutions, Model Training, and Automation",
      description:
        "We enable responsible AI adoption, model training, and automation to improve efficiency, decision-making, and service delivery, while ensuring alignment with organizational goals.",
      includes: [
        "Enterprise data strategy design",
        "AI-readiness assessments",
        "Responsible and ethical AI frameworks",
        "AI model training",
        "Automation and decision-support solutions"
      ],
      results: "Delivered 50+ AI solutions with 85% accuracy improvement"
    },
    {
      icon: Shield,
      title: "Data Protection, Governance, and Compliance",
      description:
        "We help organizations build trusted data environments by strengthening governance frameworks, managing privacy and security risks, and supporting compliance with local and international requirements.",
      includes: [
        "Data protection and privacy advisory",
        "Governance frameworks and policy development",
        "Risk assessments and compliance support",
        "Alignment with global standards and local regulations"
      ],
      results: "Achieved 100% compliance rate for 40+ organizations"
    }
  ];

  return (
    <section className="py-20 bg-muted" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Core Services Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We support governments, business enterprises, and social impact organizations through our core integrated service areas to deliver measurable results and long-term value.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-texture">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-foreground mb-2">What's Included:</h4>
                  <ul className="space-y-1">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-primary/5 rounded-lg p-3 mb-4">
                  <p className="text-sm font-medium text-primary">{service.results}</p>
                </div>

                <div className="flex gap-2">
                  <CustomButton href="/contact" size="sm" className="flex-1">
                    Book a Consultation
                  </CustomButton>
                  <CustomButton href="/contact" variant="secondary" size="sm" className="flex-1">
                    Contact Us
                  </CustomButton>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
