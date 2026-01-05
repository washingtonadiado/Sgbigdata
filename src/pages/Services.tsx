import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Brain, GraduationCap, Search, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollAnimation from "@/components/ScrollAnimation";
import Icon3D from "@/components/ui/icon-3d";
import CustomButton from "@/components/ui/custom-button";

const services = [
  {
    icon: Search,
    title: "Research & Evidence-Based Advisory",
    description: "We design and deliver high-quality research that informs policy, strategy, and investment decisions, transforming complex datasets into insights leaders can trust and act upon.",
    includes: [
      "Questionnaire and survey design",
      "Data collection tools and methodologies", 
      "Quantitative, qualitative, and mixed methods data analysis",
      "Research reporting and insight visualization"
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analytics and Business Intelligence",
    description: "We help organizations move from raw data to clear, decision-ready insights through advanced analytics, interactive dashboards, and executive reporting.",
    includes: [
      "Data preparation, cleaning, and organization",
      "Descriptive, diagnostic, predictive, and prescriptive analytics",
      "Interactive dashboards (Power BI, Tableau, Excel, R-Language, Python)",
      "Executive-ready reporting and insight storytelling",
      "Data quality assessment and optimization"
    ],
  },
  {
    icon: GraduationCap,
    title: "Training and Digital Skills Capacity Building",
    description: "Through our digital school, SG Data School, we strengthen institutional capability by equipping teams with practical skills in data analytics, research, AI literacy, and digital transformation.",
    includes: [
      "Corporate and public sector training",
      "Data analytics and research skills programs",
      "AI literacy and digital transformation workshops",
      "Custom learning pathways"
    ],
  },
  {
    icon: Brain,
    title: "AI Solutions, Model Training, and Automation",
    description: "We enable responsible AI adoption, model training, and automation to improve efficiency, decision-making, and service delivery, while ensuring alignment with organizational goals.",
    includes: [
      "Enterprise data strategy design",
      "AI-readiness assessments",
      "Responsible and ethical AI frameworks",
      "AI model training",
      "Automation and decision-support solutions"
    ],
  },
  {
    icon: Shield,
    title: "Data Protection, Governance, and Compliance",
    description: "We help organizations build trusted data environments by strengthening governance frameworks, managing privacy and security risks, and supporting compliance with local and international requirements.",
    includes: [
      "Data protection and privacy advisory",
      "Governance frameworks and policy development",
      "Risk assessments and compliance support",
      "Alignment with global standards and local regulations"
    ],
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/Services cover.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-teal">Services</span>
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            We deliver data strategy, analytics, automation, and compliance solutions that scale with your organization — whether you're just getting started or building enterprise intelligence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <ScrollAnimation>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Core Services
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
                      <div className="w-16 h-16 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                        <Icon3D 
                          icon={service.icon} 
                          size="lg" 
                          variant="primary"
                        />
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
            <Link to="/contact">
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
