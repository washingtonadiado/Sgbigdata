import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, Clock, CheckCircle2 } from "lucide-react";

const Training = () => {
  const programs = [
    {
      title: "Data Analytics Fundamentals",
      duration: "4 weeks",
      level: "Beginner",
      description: "Master the basics of data analysis, visualization, and statistical thinking for business decisions.",
      topics: ["Data Collection", "Excel & SQL", "Data Visualization", "Statistical Analysis"],
    },
    {
      title: "Advanced Analytics & AI",
      duration: "8 weeks",
      level: "Advanced",
      description: "Learn predictive modeling, machine learning, and AI implementation for enterprise solutions.",
      topics: ["Machine Learning", "Predictive Analytics", "AI Integration", "Model Deployment"],
    },
    {
      title: "Data Governance & Compliance",
      duration: "3 weeks",
      level: "Intermediate",
      description: "Understand data protection laws, GDPR, and Kenya's Data Protection Act with practical implementation.",
      topics: ["GDPR Compliance", "Data Protection Act", "Privacy Management", "Security Best Practices"],
    },
  ];

  const benefits = [
    "Hands-on projects with real-world datasets",
    "Certificate of completion recognized across East Africa",
    "Lifetime access to course materials and updates",
    "Expert instructors with industry experience",
    "Flexible learning schedules (online & in-person)",
    "Career support and networking opportunities",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-hero via-background to-navy/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Professional Training Programs</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Transform Your Team with <span className="text-primary">Data Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Empower your organization with cutting-edge data skills through our comprehensive training programs designed for African businesses.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="rounded-full">
                Enroll Now
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Training Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Structured learning paths designed to take you from fundamentals to advanced data expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <Card 
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {program.level}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{program.duration}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-foreground">Key Topics:</h4>
                    <ul className="space-y-2">
                      {program.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full mt-6 rounded-full" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-navy text-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Choose Our Training?
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive learning experience designed for success
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-lg bg-background/5 border border-border/20 hover:bg-background/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium pt-2">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <BookOpen className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Upskill Your Team?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get in touch to discuss custom training programs tailored to your organization's needs
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="rounded-full">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Request Group Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;
