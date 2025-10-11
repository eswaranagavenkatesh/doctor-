import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Stethoscope, TestTube, Activity, Syringe, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Link } from "react-router-dom";

const HomeHealthCare = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Doctor Consultation at Home",
      description: "Experienced doctors visit your home for comprehensive medical consultations and treatment"
    },
    {
      icon: TestTube,
      title: "Sample Collection",
      description: "Lab technicians collect blood and other samples from your home for testing"
    },
    {
      icon: Activity,
      title: "ECG at Home",
      description: "Electrocardiogram (ECG) tests performed at your convenience at home"
    },
    {
      icon: Syringe,
      title: "Nursing Care",
      description: "Professional nursing services for post-operative care and chronic conditions"
    },
    {
      icon: Heart,
      title: "Elderly Care",
      description: "Specialized care services for elderly patients requiring regular monitoring"
    }
  ];

  const features = [
    "Qualified and experienced healthcare professionals",
    "All necessary medical equipment provided",
    "Flexible scheduling to suit your convenience",
    "Affordable home visit charges",
    "Emergency services available",
    "Reports delivered digitally and physically"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageBanner 
        title="Home Health Care" 
        subtitle="Professional healthcare services delivered to your doorstep"
        imageSrc="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&h=400&fit=crop"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Intro Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-6">
            <Home className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Healthcare at Your Doorstep</h2>
          <p className="text-muted-foreground text-lg">
            Experience quality medical care in the comfort of your home. Our skilled healthcare 
            professionals bring hospital-grade services to you, ensuring convenience without 
            compromising on quality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Why Choose Our Home Health Care?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground text-center">
          <CardContent className="py-12">
            <h3 className="text-2xl font-bold mb-4">Need Healthcare Services at Home?</h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Book a home visit from our qualified medical professionals today
            </p>
            <Link to="/book-appointment">
              <Button size="lg" variant="secondary">
                Book Home Visit
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default HomeHealthCare;
