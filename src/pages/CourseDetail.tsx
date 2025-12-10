import { useParams } from 'react-router-dom';
import { courses } from '@/data/courses';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Users, Target, GraduationCap, Building2, User } from "lucide-react";
import NotFound from './NotFound';

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === Number(courseId));

  if (!course) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Course Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-hero via-background to-navy/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {course.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                    <GraduationCap className="w-4 h-4" />
                    {course.level}
                </span>
                {course.duration && (
                    <span className="inline-flex items-center gap-1">
                    {course.duration}
                    </span>
                )}
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
                {/* Introduction */}
                <div className='p-1'>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Course Introduction</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        {course.introduction}
                    </p>
                </div>

                {/* Who Should Attend */}
                <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Who Should Attend</h2>
                    <ul className="grid md:grid-cols-1 gap-2">
                        {course.whoShouldAttend.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            {item}
                        </li>
                        ))}
                    </ul>
                </div>

                {/* Impact Sections */}
                {(course.personalImpact || course.organizationalImpact) && (
                    <div className="grid md:grid-cols-2 gap-6">
                    {course.personalImpact && (
                        <div className="bg-primary/5 rounded-lg p-6">
                        <div className="flex items-center gap-2 mb-3">
                            <User className="w-5 h-5 text-primary" />
                            <h4 className="font-semibold text-foreground">Personal Impact</h4>
                        </div>
                        <ul className="space-y-2">
                            {course.personalImpact.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                                <span className="text-primary mt-1">✓</span>
                                {item}
                            </li>
                            ))}
                        </ul>
                        </div>
                    )}
                    {course.organizationalImpact && (
                        <div className="bg-secondary/10 rounded-lg p-6">
                        <div className="flex items-center gap-2 mb-3">
                            <Building2 className="w-5 h-5 text-secondary" />
                            <h4 className="font-semibold text-foreground">Organizational Impact</h4>
                        </div>
                        <ul className="space-y-2">
                            {course.organizationalImpact.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                                <span className="text-secondary mt-1">✓</span>
                                {item}
                            </li>
                            ))}
                        </ul>
                        </div>
                    )}
                    </div>
                )}

                {/* Course Objectives */}
                {course.objectives && course.objectives.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Course Objectives</h2>
                        <ul className="space-y-3">
                        {course.objectives.map((obj, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="text-primary font-bold">{i + 1}.</span>
                            {obj}
                            </li>
                        ))}
                        </ul>
                    </div>
                )}

                {/* Course Modules */}
                <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Course Outline</h2>
                    <div className="space-y-3">
                    {course.modules.map((module, i) => (
                        <div key={i} className="border border-border rounded-lg overflow-hidden">
                        <Accordion type="single" collapsible>
                            <AccordionItem value={`module-${i}`} className="border-0">
                            <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50 text-base">
                                <span className="text-left font-medium">{module.title}</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4">
                                <ul className="space-y-1.5 pt-2">
                                {module.topics.map((topic, j) => (
                                    <li key={j} className="flex items-start gap-2 text-muted-foreground text-sm">
                                    <span className="text-primary">→</span>
                                    {topic}
                                    </li>
                                ))}
                                </ul>
                            </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        </div>
                    ))}
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
                <div className="sticky top-24">
                    <img src={course.thumbnail} alt={course.title} className="rounded-lg w-full h-auto object-cover mb-6 shadow-lg" />
                    <Button size="lg" className="w-full rounded-full">
                        Enquire About This Course
                    </Button>
                </div>
            </aside>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;
