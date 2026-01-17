import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Monitor, Users, BookOpen, Zap } from "lucide-react";
import { courses } from "@/data/courses";
import { Link } from "react-router-dom";
import ScrollAnimation from "@/components/ScrollAnimation";
import Icon3D from "@/components/ui/icon-3d";

const Training = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <section
        className="relative pt-32 pb-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/Training cover.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional <span className="text-primary">Courses</span>
            </h1>
            <p className="text-xl mb-4">
              Transform your career with practical, hands-on training programs designed for professionals across industries.
            </p>
            <p>
               Courses available • Expert instructors • Real-world case studies
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
                  <Card>
                    <div className="relative">
                      <img src={course.thumbnail} alt={course.title} className="rounded-t-xl w-full h-48 object-cover" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2 flex-grow group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-secondary/80 text-secondary-foreground text-xs font-medium rounded-full">
                          <GraduationCap className="w-3 h-3" />
                          {course.level}
                        </span>
                        
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Training Formats Section */}
      <ScrollAnimation>
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Training <span className="text-primary">Formats</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose the learning format that best fits your schedule and learning style. We offer flexible options to accommodate different preferences and needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Virtual Classes */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon3D icon={Monitor} size="lg" variant="primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Virtual (Online Classes)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Join our interactive online classes, led by experienced instructors, with flexible schedules and accessible learning materials—all from the comfort of your home.
                  </p>
                </CardContent>
              </Card>

              {/* Face-to-Face Classes */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon3D icon={Users} size="lg" variant="secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Face-to-Face Classes</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Attend in-person classes at our training centers for hands-on experience, direct instructor support, and a collaborative learning environment.
                  </p>
                </CardContent>
              </Card>

              {/* E-Learning */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon3D icon={BookOpen} size="lg" variant="accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">E-Learning (Self-Paced)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Learn at your own pace with our self-guided courses, available anytime, anywhere, perfect for busy schedules and flexible learning.
                  </p>
                </CardContent>
              </Card>

              {/* Hybrid Classes */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon3D icon={Zap} size="lg" variant="primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Hybrid Classes</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Experience the best of both worlds with our Hybrid Classes, blending hands-on physical sessions, interactive online learning, and flexible self-paced materials.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

     

    </div>
  );
};

export default Training;

