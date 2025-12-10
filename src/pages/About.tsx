import { CheckCircle, Lightbulb, Search, TrendingUp, Shield, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const coreValues = [
  { icon: CheckCircle, label: "Integrity", color: "text-teal" },
  { icon: Lightbulb, label: "Innovation", color: "text-orange" },
  { icon: Search, label: "Simplicity", color: "text-teal" },
  { icon: TrendingUp, label: "Impact", color: "text-orange" },
  { icon: Shield, label: "Data responsibility", color: "text-teal" },
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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Juma Godwin",
    role: "CO-FOUNDER, MANAGING DIRECTOR",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sandra Matioli",
    role: "OPERATIONS MANAGER",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-teal">SG Big Data</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <span className="text-orange font-semibold">Providing Insight Beyond Tomorrow</span> — we help organizations use data responsibly, strategically, and intelligently to solve real-world challenges.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
              <div className="w-16 h-16 bg-teal/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-teal" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower organizations with strategic, ethical, and impactful data solutions that drive innovation, compliance, and growth.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
              <div className="w-16 h-16 bg-orange/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-orange" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be Africa's most trusted partner in data-driven decision-making and AI transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
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

      {/* Why Choose Us */}
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
                className="flex items-start gap-4 bg-card p-5 rounded-xl border border-border hover:border-teal/50 transition-colors"
              >
                <CheckCircle className="w-6 h-6 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Meet the Experts Behind the Data
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Leadership team driving innovation and excellence
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="relative mb-6 inline-block">
                  <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden border-4 border-teal/30 group-hover:border-teal transition-colors">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-orange text-sm font-medium tracking-wide">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal to-teal/80">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Together, Let's Transform How You Use Data
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with us to unlock the full potential of your data assets
          </p>
          <Link to="/">
            <Button size="lg" className="bg-white text-teal hover:bg-gray-100 font-semibold px-8">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
