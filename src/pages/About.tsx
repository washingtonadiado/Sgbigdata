import { CheckCircle, Lightbulb, Search, TrendingUp, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollAnimation from "@/components/ScrollAnimation";

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

const team = [
  {
    name: "Sadique Kwatsima",
    role: "FOUNDER, CEO",
    image: "/FOUNDER,CEO.jpg",
  },
  {
    name: "Juma Godwin",
    role: "CO-FOUNDER, MANAGING DIRECTOR",
    image: "/C0-founder, managing director.jpg",
  },
  {
    name: "Sandra Matioli",
    role: "OPERATIONS MANAGER",
    image: "/Operations Manager.jpg",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero text-hero-foreground">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-primary">SG Big Data</span>
          </h1>
          <p className="text-xl md:text-2xl text-hero-foreground/80 max-w-4xl mx-auto leading-relaxed">
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
              <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To empower organizations with strategic, ethical, and impactful data solutions that drive innovation, compliance, and growth.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be Africa's most trusted partner in data-driven decision-making and AI transformation.
                </p>
              </div>
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
                  className="flex items-center gap-3 bg-card px-6 py-4 rounded-full border border-border shadow-md hover:shadow-lg transition-shadow"
                >
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                  <span className="font-semibold text-foreground">{value.label}</span>
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
                <div
                  key={index}
                  className="flex items-start gap-4 bg-card p-5 rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Team Section */}
      <ScrollAnimation>
        <section className="py-20 bg-hero text-hero-foreground">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Meet the Experts Behind the Data
            </h2>
            <p className="text-center text-hero-foreground/60 mb-12">
              Leadership team driving innovation and excellence
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="relative mb-6 inline-block">
                    <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-colors">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-secondary text-sm font-medium tracking-wide">{member.role}</p>
                </div>
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
            <Link to="/">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8">
                Get Started Today
              </Button>
            </Link>
          </div>
        </section>
      </ScrollAnimation>

    </div>
  );
};

export default About;