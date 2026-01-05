import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollAnimation from "@/components/ScrollAnimation";
import Icon3D from "@/components/ui/icon-3d";
import Icon3DHero from "@/components/ui/icon-3d-hero";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Let's Work <span className="text-primary">Together</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're exploring data strategy, compliance, or AI, we'd love to hear from you. 
            Reach out and let's start a conversation about how we can support your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <ScrollAnimation>
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background resize-none"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-10">
                {/* Headquarters */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6">Headquarters</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                        <Icon3DHero 
                          icon={MapPin} 
                          size="lg" 
                          variant="primary"
                          animated={true}
                        />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Purshottam Place,</p>
                        <p className="text-muted-foreground">Westlands, Nairobi, Kenya</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                        <Icon3DHero 
                          icon={Phone} 
                          size="lg" 
                          variant="primary"
                          animated={true}
                        />
                      </div>
                      <a href="tel:+254793859234" className="text-foreground hover:text-primary transition-colors text-lg">
                        +254 793-859-234
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                        <Icon3DHero 
                          icon={Mail} 
                          size="lg" 
                          variant="primary"
                          animated={true}
                        />
                      </div>
                      <a href="mailto:info@sgbigdata.com" className="text-foreground hover:text-primary transition-colors text-lg">
                        info@sgbigdata.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Social Media</h3>
                  <p className="text-muted-foreground mb-6">
                    We operate a lot of offices all over the world.
                  </p>
                  <div className="flex gap-6">
                    <a
                      href="https://www.linkedin.com/company/sg-big-data-research-and-consulting/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    >
                      <Icon3D 
                        icon={Linkedin} 
                        size="md" 
                        variant="primary"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/consult_sg/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    >
                      <Icon3D 
                        icon={Instagram} 
                        size="md" 
                        variant="primary"
                      />
                    </a>
                    <a
                      href="https://x.com/consult_sg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    >
                      <Icon3D 
                        icon={Twitter} 
                        size="md" 
                        variant="primary"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/consult.sg.research"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    >
                      <Icon3D 
                        icon={Facebook} 
                        size="md" 
                        variant="primary"
                      />
                    </a>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-muted rounded-2xl h-64 flex items-center justify-center border border-border overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819088867455!2d36.8022!3d-1.2636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xad2c84a8b1f12f0a!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SG Big Data Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

    </div>
  );
};

export default Contact;