import CustomButton from "@/components/ui/custom-button";
import { Landmark, Globe, FlaskConical } from "lucide-react";
import Icon3D from "@/components/ui/icon-3d";
import { Card, CardContent } from "@/components/ui/card";
import EnhancedScrollAnimation from "@/components/EnhancedScrollAnimation";

const ValueProposition = () => {
  const propositions = [
    {
      icon: Landmark,
      text: "We support governments, business enterprises, and social impact organizations through our core integrated service areas to deliver measurable results and long-term value."
    },
    {
      icon: Globe,
      text: "We partner with our clients across the world to unlock value from data while ensuring ethical use, regulatory compliance, and long-term sustainability."
    },
    {
      icon: FlaskConical,
      text: "Our approach blends technical expertise, research rigor, and regulatory awareness, enabling clients to make confident, evidence-based decisions in complex digital environments."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image on the left */}
          <div className="text-center md:text-left">
            <EnhancedScrollAnimation animation="fadeLeft" duration={0.8}>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                WHY SG BIG DATA?
              </h2>
              <img src="/Value proposition.png" alt="Value Proposition" className="rounded-lg shadow-lg mx-auto md:mx-0 mt-4" />
            </EnhancedScrollAnimation>
          </div>

          {/* Text content on the right */}
          <div>
            <EnhancedScrollAnimation animation="fadeRight" duration={0.8} delay={0.2}>
              
              {/* Since 2022 Experience Section */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="experience-badge rounded-2xl p-4">
                    <span className="text-2xl md:text-3xl font-black text-foreground relative z-10">Since</span>
                  </div>
                  <div className="experience-dot absolute -top-2 -right-2 w-6 h-6 rounded-full border-4 border-background"></div>
                </div>
                <div className="flex-1">
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                    2022 from our
                  </div>
                  <div className="text-2xl md:text-3xl font-semibold text-primary">
                    experience
                  </div>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Providing Insight Beyond Tomorrow
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                SG Big Data Research and Consulting helps clients build internal capability, make better decisions, 
                and operate with confidence by delivering practical research, data, and strategy solutions aligned 
                to contemporary and future needs.
              </p>
            </EnhancedScrollAnimation>
            
            <div className="space-y-6">
              {propositions.map((proposition, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-texture">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-16 h-16 rounded-lg bg-primary/5 flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon3D 
                          icon={proposition.icon} 
                          size="lg" 
                          variant="primary"
                          className="icon-3d-float"
                        />
                      </div>
                      <p className="text-muted-foreground">
                        {proposition.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <CustomButton href="/training" size="lg">
                Get Trained
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;