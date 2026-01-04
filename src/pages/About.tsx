import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Lightbulb, Search, TrendingUp, Shield, Heart } from "lucide-react";
import CustomButton from "@/components/ui/custom-button";
import ScrollAnimation from "@/components/ScrollAnimation";
import Icon3D from "@/components/ui/icon-3d";
import Icon3DHero from "@/components/ui/icon-3d-hero";

const coreValues = [
  { icon: CheckCircle, label: "Integrity", color: "text-primary" },
  { icon: Lightbulb, label: "Innovation", color: "text-secondary" },
  { icon: Search, label: "Simplicity", color: "text-primary" },
  { icon: TrendingUp, label: "Impact", color: "text-secondary" },
  { icon: Shield, label: "Data responsibility", color: "text-primary" },
];

const whyChooseUs = [
  "Deep understanding of African data compliance frameworks",
  "Blending strategy, analytics, and AI in one team",
  "SME-friendly packages and enterprise-ready tools",
  "Thoughtful, jargon-free communication",
  "Experience across public, private, and academic sectors",
];



const About = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/About us.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-primary">SG Big Data</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            <span className="text-secondary font-semibold">Providing Insight Beyond Tomorrow</span> — we help organizations use data responsibly, strategically, and intelligently to solve real-world challenges.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <ScrollAnimation>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <Card>
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                    <Icon3DHero 
                      icon={Heart} 
                      size="xl" 
                      variant="primary"
                      animated={true}
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To empower organizations with strategic, ethical, and impactful data solutions that drive innovation, compliance, and growth.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card>
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-secondary/5 rounded-xl flex items-center justify-center mb-6">
                    <Icon3DHero 
                      icon={TrendingUp} 
                      size="xl" 
                      variant="secondary"
                      animated={true}
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To be Africa's most trusted partner in data-driven decision-making and AI transformation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Core Values */}
      <ScrollAnimation>
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Our Core Values
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-card px-8 py-6 rounded-full border border-border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon3D 
                    icon={value.icon} 
                    size="md" 
                    variant={value.color.includes('primary') ? 'primary' : 'secondary'}
                    className="icon-3d-float"
                  />
                  <span className="font-semibold text-foreground text-lg">{value.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Why Choose Us */}
      <ScrollAnimation>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">
              Why Choose Us
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
              We combine global data standards with local context and a strong human-first approach. Here's what makes us stand out:
            </p>
            <div className="max-w-3xl mx-auto space-y-4">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Icon3D 
                        icon={CheckCircle} 
                        size="md" 
                        variant="primary"
                        className="mt-1"
                      />
                    </div>
                    <span className="text-foreground text-lg">{item}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>



      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Together, Let's Transform How You Use Data
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Partner with us to unlock the full potential of your data assets
            </p>
            <CustomButton href="/contact" size="lg">
              Get Started Today
            </CustomButton>
          </div>
        </section>
      </ScrollAnimation>

    </div>
  );
};

export default About;