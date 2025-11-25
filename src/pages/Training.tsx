import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users, BarChart } from "lucide-react";
import courseDataAnalytics from "@/assets/course-data-analytics.jpg";
import courseAiMl from "@/assets/course-ai-ml.jpg";
import courseGovernance from "@/assets/course-governance.jpg";
import coursePython from "@/assets/course-python.jpg";
import courseBi from "@/assets/course-bi.jpg";
import courseEtl from "@/assets/course-etl.jpg";

const Training = () => {
  const courses = [
    {
      id: 1,
      title: "Data Analytics Fundamentals",
      instructor: "Dr. Sarah Kimani",
      thumbnail: courseDataAnalytics,
      price: "KES 15,000",
      originalPrice: "KES 25,000",
      rating: 4.8,
      students: 2340,
      duration: "8 weeks",
      level: "Beginner",
      description: "Master the basics of data analysis, visualization, and statistical thinking for business decisions.",
    },
    {
      id: 2,
      title: "Advanced AI & Machine Learning",
      instructor: "Prof. James Omondi",
      thumbnail: courseAiMl,
      price: "KES 35,000",
      originalPrice: "KES 50,000",
      rating: 4.9,
      students: 1890,
      duration: "12 weeks",
      level: "Advanced",
      description: "Learn predictive modeling, deep learning, and AI implementation for enterprise solutions.",
    },
    {
      id: 3,
      title: "Data Governance & Compliance",
      instructor: "Mary Wanjiru",
      thumbnail: courseGovernance,
      price: "KES 20,000",
      originalPrice: "KES 30,000",
      rating: 4.7,
      students: 1560,
      duration: "6 weeks",
      level: "Intermediate",
      description: "Understand GDPR, Kenya's Data Protection Act, and implement robust data governance frameworks.",
    },
    {
      id: 4,
      title: "Python for Data Science",
      instructor: "David Mutua",
      thumbnail: coursePython,
      price: "KES 18,000",
      originalPrice: "KES 28,000",
      rating: 4.9,
      students: 3120,
      duration: "10 weeks",
      level: "Beginner",
      description: "Complete Python programming course covering pandas, NumPy, and data manipulation techniques.",
    },
    {
      id: 5,
      title: "Business Intelligence & Reporting",
      instructor: "Grace Achieng",
      thumbnail: courseBi,
      price: "KES 22,000",
      originalPrice: "KES 32,000",
      rating: 4.6,
      students: 1780,
      duration: "8 weeks",
      level: "Intermediate",
      description: "Build interactive dashboards and KPI reports using Power BI, Tableau, and advanced Excel.",
    },
    {
      id: 6,
      title: "Data Warehousing & ETL",
      instructor: "Michael Otieno",
      thumbnail: courseEtl,
      price: "KES 28,000",
      originalPrice: "KES 40,000",
      rating: 4.8,
      students: 1420,
      duration: "10 weeks",
      level: "Advanced",
      description: "Design and implement data warehouses, ETL pipelines, and cloud data infrastructure.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-hero via-background to-navy/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Professional Data Training <span className="text-primary">Courses</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Learn from industry experts and transform your career with practical, hands-on courses designed for African businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">All Courses</h2>
            <p className="text-muted-foreground">Choose from {courses.length} professional courses</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card 
                key={course.id}
                className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-secondary/90 backdrop-blur-sm rounded-full text-xs font-bold text-secondary-foreground">
                    {course.level}
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {course.description}
                  </p>
                  
                  <p className="text-xs text-muted-foreground mb-3">
                    {course.instructor}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BarChart className="w-3 h-3" />
                      <span>{course.level}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-foreground">{course.rating}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${i < Math.floor(course.rating) ? 'fill-secondary text-secondary' : 'text-muted'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({course.students.toLocaleString()} students)
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-foreground">{course.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4 rounded-full" size="sm">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      <Footer />
    </div>
  );
};

export default Training;
