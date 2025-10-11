import { Heart, Salad, Dumbbell, Brain, Scale } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const LifestyleClinic = () => {
  const services = [
    { icon: Dumbbell, title: "Yoga Therapy", description: "Holistic wellness through guided yoga sessions", schedule: "Mon, Wed, Fri - 6:00 AM & 6:00 PM" },
    { icon: Salad, title: "Nutrition Guidance", description: "Personalized diet plans for optimal health", schedule: "By Appointment" },
    { icon: Dumbbell, title: "Physiotherapy", description: "Recovery and rehabilitation programs", schedule: "Mon-Sat - 9:00 AM to 7:00 PM" },
    { icon: Brain, title: "Mental Wellness", description: "Counseling and stress management", schedule: "By Appointment" },
    { icon: Scale, title: "Weight Management", description: "Comprehensive weight loss programs", schedule: "Weekly Sessions" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-6">
            <Heart className="h-12 w-12 text-primary" />
          </div>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-6">
            Lifestyle <span className="text-primary">Clinic</span>
          </h1>
          <p className="text-lg text-muted-foreground">Holistic wellness programs for a healthier lifestyle</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="bg-accent p-3 rounded-lg w-fit mb-3">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-poppins">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">📅 {service.schedule}</p>
                  <Button className="w-full" onClick={() => toast.success("Session booking confirmed!")}>
                    Join Session
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LifestyleClinic;
