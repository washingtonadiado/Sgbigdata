import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Kimani",
      role: "Director of Policy Research",
      organization: "Ministry of Health, Kenya",
      content: "SG Big Data transformed our approach to health policy research. Their evidence-based methodology helped us develop data-driven policies that improved healthcare delivery across 15 counties.",
      rating: 5,
      image: "/CEO.jpg"
    },
    {
      name: "Michael Chen",
      role: "Chief Data Officer",
      organization: "East Africa Bank",
      content: "The AI solutions and governance frameworks implemented by SG Big Data increased our decision-making accuracy by 85% while ensuring full regulatory compliance. Outstanding partnership.",
      rating: 5,
      image: "/C0-founder, managing director.jpg"
    },
    {
      name: "Dr. Amina Hassan",
      role: "Research Director",
      organization: "African Development Institute",
      content: "Their capacity building programs equipped our team with advanced analytics skills. The training was practical, comprehensive, and directly applicable to our development projects.",
      rating: 5,
      image: "/Operations Manager.jpg"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by Organizations Across the World
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See what our clients say about working with us to transform their data capabilities and achieve measurable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-texture">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.organization}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">4.9/5 Average Client Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;