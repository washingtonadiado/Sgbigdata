import CustomButton from "@/components/ui/custom-button";
import { Landmark, Globe, FlaskConical } from "lucide-react";

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
          <div className="text-center">
            <img src="/Value proposition.png" alt="Value Proposition" className="rounded-lg shadow-lg mx-auto" />
          </div>

          {/* Text content on the right */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Providing Insight Beyond Tomorrow
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              SG Big Data Research and Consulting helps clients build internal capability, make better decisions, 
              and operate with confidence by delivering practical research, data, and strategy solutions aligned 
              to contemporary and future needs.
            </p>
            
            <div className="space-y-6">
              {propositions.map((proposition, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <proposition.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    {proposition.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8">
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