import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, TestTube, Building2, Heart, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import clinicBanner from "@/assets/clinic-banner.jpg";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Doctor Consultations",
      description: "Expert medical consultations across multiple specializations including general medicine, cardiology, pediatrics, and more.",
      link: "/services/doctor-clinic"
    },
    {
      icon: TestTube,
      title: "Laboratory Services",
      description: "Comprehensive diagnostic tests with advanced equipment and accurate results delivered on time.",
      link: "/services/lab"
    },
    {
      icon: Building2,
      title: "Pharmacy",
      description: "Well-stocked pharmacy with genuine medicines and healthcare products available at competitive prices.",
      link: "/pharmacy"
    },
    {
      icon: Home,
      title: "Home Health Care",
      description: "Professional healthcare services at your doorstep including doctor visits, sample collection, and ECG tests.",
      link: "/services/home-health-care"
    },
    {
      icon: Heart,
      title: "Health Packages",
      description: "Customized health checkup packages designed for different age groups and health requirements.",
      link: "/packages"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Healthcare Services in Visakhapatnam | Doctor, Lab, Pharmacy, Home Care - Vishakaha Clinic"
        description="Comprehensive medical services in Vizag: Expert doctor consultations, advanced diagnostic lab tests, 24/7 pharmacy, home healthcare, physiotherapy & wellness programs. Book online or visit our clinic near KGH & Madhurawada."
        keywords="healthcare services visakhapatnam, doctor consultation vizag, medical lab services, pharmacy vizag, home healthcare services, diagnostic tests visakhapatnam, health checkup packages, physiotherapy vizag, medical clinic services, multispeciality clinic vizag"
        canonicalUrl="https://vishakahaclinic.com/services"
      />
      <StructuredData 
        type="service" 
        data={{
          breadcrumb: [
            { name: "Home", url: "https://vishakahaclinic.com" },
            { name: "Services", url: "https://vishakahaclinic.com/services" }
          ]
        }}
      />
      <Navbar />
      <PageBanner 
        title="Comprehensive Healthcare Services in Visakhapatnam" 
        subtitle="Complete medical solutions from expert consultations to home care - All under one roof at Vishakaha Multispeciality Clinic"
        imageSrc={clinicBanner}
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {service.description}
                </CardDescription>
                <Link to={service.link}>
                  <Button>Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
