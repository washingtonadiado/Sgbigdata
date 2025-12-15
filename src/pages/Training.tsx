import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { courses } from "@/data/courses";
import { Link } from "react-router-dom";
import ScrollAnimation from "@/components/ScrollAnimation";

const Training = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-hero via-background to-navy/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Professional <span className="text-primary">Courses</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Transform your career with practical, hands-on training programs designed for professionals across Africa.
            </p>
            <p className="text-muted-foreground">
              {courses.length} courses available • Expert instructors • Real-world case studies
            </p>
          </div>
        </div>
      </section>

      <ScrollAnimation>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <Link to={`/training/${course.id}`} key={course.id} className="group block">
                  <div className="border border-border rounded-xl bg-card shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out h-full flex flex-col">
                    <div className="relative">
                      <img src={course.thumbnail} alt={course.title} className="rounded-t-xl w-full h-48 object-cover" />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-foreground mb-2 flex-grow group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-secondary/80 text-secondary-foreground text-xs font-medium rounded-full">
                          <GraduationCap className="w-3 h-3" />
                          {course.level}
                        </span>
                        {course.duration && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                            {course.duration}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Corporate Training Available
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get custom training programs for your team with volume discounts and tailored curriculum
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="rounded-full">
                  Request Group Pricing
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

    </div>
  );
};

export default Training;