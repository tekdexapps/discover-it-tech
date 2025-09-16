import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  Code, 
  Database, 
  Smartphone, 
  BarChart3, 
  Shield,
  ArrowRight,
  Zap,
  Headphones,
  Users,
  Cpu,
  Globe
} from "lucide-react";

const services = [
  {
    "icon": Smartphone,
    "title": "Mobile App Development",
    "description": "Native and cross-platform mobile applications for iOS and Android. User-centric design with seamless performance and offline capabilities.",
    "color": "text-pink-500",
    "bgColor": "bg-pink-500/10"
  },
  {
    "icon": BarChart3,
    "title": "Data Analytics & Business Intelligence",
    "description": "Advanced data analytics, Power BI, and Tableau solutions. Transform raw data into actionable insights and interactive dashboards for strategic decision-making.",
    "color": "text-orange-500",
    "bgColor": "bg-orange-500/10"
  },
  {
    "icon": Shield,
    "title": "Cybersecurity & Compliance",
    "description": "Comprehensive security assessments, vulnerability management, and compliance frameworks (ISO, GDPR, HIPAA). Protect your digital assets and customer data.",
    "color": "text-red-500",
    "bgColor": "bg-red-500/10"
  },
  {
    "icon": Globe,
    "title": "Web Development & E-commerce",
    "description": "Responsive websites and robust e-commerce platforms. SEO-optimized, high-performance web solutions with seamless payment integrations.",
    "color": "text-cyan-500",
    "bgColor": "bg-cyan-500/10"
  },
  {
    "icon": Cpu,
    "title": "AI & Machine Learning",
    "description": "Intelligent solutions powered by artificial intelligence and machine learning. Predictive analytics, natural language processing, and computer vision applications.",
    "color": "text-indigo-500",
    "bgColor": "bg-indigo-500/10"
  },
  {
    "icon": Cloud,
    "title": "DevOps & Cloud Solutions",
    "description": "End-to-end DevOps implementation and cloud migration services. We automate workflows, optimize infrastructure, and ensure scalable cloud deployments on AWS, Azure, and GCP.",
    "color": "text-blue-500",
    "bgColor": "bg-blue-500/10"
  },
  {
    "icon": Code,
    "title": "Custom Software Development",
    "description": "Full-stack development of bespoke applications tailored to your unique business requirements. From MVP to enterprise-grade systems with modern tech stacks.",
    "color": "text-green-500",
    "bgColor": "bg-green-500/10"
  },
  {
    "icon": Database,
    "title": "ERP & Business Automation",
    "description": "Comprehensive ERP implementation and business process automation. Integrate operations, finance, HR, and supply chain into a unified system for real-time decision making.",
    "color": "text-purple-500",
    "bgColor": "bg-purple-500/10"
  },
  {
    "icon": Users,
    "title": "IT Consulting & Digital Transformation",
    "description": "Strategic technology consulting to drive digital transformation. Technology assessment, roadmap development, and digital innovation strategies.",
    "color": "text-teal-500",
    "bgColor": "bg-teal-500/10"
  },
  {
    "icon": Headphones,
    "title": "24/7 IT Support & Managed Services",
    "description": "Round-the-clock technical support and managed IT services. Proactive monitoring, maintenance, and rapid issue resolution for business continuity.",
    "color": "text-amber-500",
    "bgColor": "bg-amber-500/10"
  }
];

const ServicesSection = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  
  // Show only first 3 services initially, or all if showAllServices is true
  const displayedServices = showAllServices ? services : services.slice(0, 3);

  return (
    <section id="services" className="py-12 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="h-4 w-4" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive IT Solutions for
            <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              Modern Businesses
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a full range of technology services designed to accelerate your digital transformation 
            and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <Card 
              key={index} 
              className="card-gradient border-0 shadow-card hover:shadow-elegant transition-smooth group cursor-pointer overflow-hidden fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`h-7 w-7 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                {/* <Button 
                  variant="ghost" 
                  className="p-0 text-primary hover:text-primary-glow group/btn"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          {!showAllServices ? (
            <Button 
              size="lg" 
              className="hero-gradient shadow-elegant hover:shadow-glow transition-smooth"
              onClick={() => setShowAllServices(true)}
            >
              View More Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          ) : (
            <Button 
              size="lg" 
              className="hero-gradient shadow-elegant hover:shadow-glow transition-smooth"
              onClick={() => setShowAllServices(false)}
            >
              View Less Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;