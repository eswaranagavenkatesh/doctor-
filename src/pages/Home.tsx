import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Calendar, Users, Award, Heart, ShieldCheck, Clock, Award as TrophyIcon, ArrowRight, TestTube, Pill, Home as HomeIcon, Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import ServiceCard from "@/components/ServiceCard";
import PackageCard from "@/components/PackageCard";
import BookingModal from "@/components/BookingModal";
import clinicBanner from "@/assets/clinic-banner.jpg";
import doctorsBanner from "@/assets/doctors-banner.jpg";
import labBanner from "@/assets/lab-banner.jpg";
import pharmacyBanner from "@/assets/pharmacy-banner.jpg";
import servicesData from "@/data/services.json";
import packagesData from "@/data/healthPackages.json";
import productsData from "@/data/products.json";
import { getIconComponent } from "@/lib/iconMap";

const Home = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  const scrollingImages = [
    { src: clinicBanner, alt: "Modern clinic facility" },
    { src: doctorsBanner, alt: "Expert medical team" },
    { src: labBanner, alt: "Advanced diagnostic lab" },
    { src: pharmacyBanner, alt: "Well-stocked pharmacy" }
  ];

  const features = [
    {
      icon: Stethoscope,
      title: "Expert Doctors",
      description: "25+ experienced specialists across multiple medical fields"
    },
    {
      icon: Calendar,
      title: "Easy Booking",
      description: "Book appointments online in just a few clicks"
    },
    {
      icon: Users,
      title: "Comprehensive Care",
      description: "Complete healthcare solutions under one roof"
    },
    {
      icon: Award,
      title: "10 Years Excellence",
      description: "A decade of trusted healthcare services - 50,000+ patients served"
    }
  ];

  const stats = [
    { icon: Award, label: "Years of Excellence", value: "10+" },
    { icon: Users, label: "Patients Served", value: "50,000+" },
    { icon: Clock, label: "Expert Doctors", value: "25+" },
    { icon: Heart, label: "Success Rate", value: "98%" }
  ];

  const handleBookPackage = (pkg: any) => {
    setSelectedPackage(pkg);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Best Multispeciality Clinic in Visakhapatnam | Vishakaha Healthcare - 10 Years Excellence"
        description="Premier multispeciality hospital in Vizag offering expert doctor consultations, advanced diagnostic lab, pharmacy, home healthcare & wellness services. 10+ years trusted healthcare near KGH & Madhurawada. Book appointment online."
        keywords="multispeciality clinic visakhapatnam, best hospital in vizag, doctor consultation vizag, medical lab visakhapatnam, pharmacy near KGH, home healthcare vizag, health checkup packages, cardiologist vizag, pediatrician visakhapatnam, general physician near me, diagnostic center vizag, pathology lab visakhapatnam, lifestyle clinic vizag, physiotherapy visakhapatnam, emergency clinic jagadamba junction, best clinic near KGH, multispeciality hospital madhurawada, healthcare services andhra pradesh"
        canonicalUrl="https://vishakahaclinic.com"
      />
      <StructuredData type="homepage" />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero">
        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
                Best Multispeciality Clinic in Visakhapatnam - 10 Years of Excellence
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 md:mb-6 italic">
                Treat with Respect... Your Trusted Healthcare Partner in Vizag
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                Vishakaha Multispeciality Clinic provides comprehensive healthcare services in Visakhapatnam with experienced specialist doctors, advanced diagnostic laboratory, 24/7 pharmacy, and state-of-the-art medical facilities. Serving patients near KGH Junction and Madhurawada with compassionate care since 2014.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <Link to="/book-appointment">
                  <Button size="lg" className="w-full sm:w-auto">
                    Book Appointment
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Hero Images - Now visible on tablet+ */}
            <div className="flex-1 hidden md:block relative w-full">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[400px] lg:h-[500px]">
                <div className="animate-fade-in">
                  <div className="grid grid-cols-2 gap-3 md:gap-4 h-full">
                    <div className="space-y-3 md:space-y-4 animate-slide-up">
                      <img 
                        src={scrollingImages[0].src}
                        alt={scrollingImages[0].alt}
                        className="w-full h-[190px] lg:h-[240px] object-cover rounded-xl hover-scale"
                      />
                      <img 
                        src={scrollingImages[1].src}
                        alt={scrollingImages[1].alt}
                        className="w-full h-[190px] lg:h-[240px] object-cover rounded-xl hover-scale"
                      />
                    </div>
                    <div className="space-y-3 md:space-y-4 animate-slide-down pt-6 md:pt-8">
                      <img 
                        src={scrollingImages[2].src}
                        alt={scrollingImages[2].alt}
                        className="w-full h-[190px] lg:h-[240px] object-cover rounded-xl hover-scale"
                      />
                      <img 
                        src={scrollingImages[3].src}
                        alt={scrollingImages[3].alt}
                        className="w-full h-[190px] lg:h-[240px] object-cover rounded-xl hover-scale"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4">
            Why Choose Vishakaha Multispeciality Clinic in Visakhapatnam?
          </h2>
          <p className="text-center text-muted-foreground text-base md:text-lg mb-8 md:mb-12 max-w-3xl mx-auto">
            As the leading multispeciality healthcare center in Vizag, we offer comprehensive medical services with expert specialists, advanced diagnostics, and compassionate patient care. Trust our decade of excellence for your family's health.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover-lift medical-card">
                <CardHeader>
                  <div className="mx-auto w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                    <feature.icon className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-base md:text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover-lift medical-card">
                <CardContent className="pt-4 md:pt-6">
                  <div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                    <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">{stat.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Healthcare Services in Visakhapatnam
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive medical services from expert consultations to home care - All under one roof
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={getIconComponent(service.icon)}
                features={service.features}
                route={service.route}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button size="lg" variant="outline">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Health Packages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Health Checkup Packages
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Preventive health packages designed for your wellness at affordable prices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagesData.slice(0, 3).map((pkg) => (
              <PackageCard
                key={pkg.id}
                name={pkg.name}
                description={pkg.description}
                price={pkg.price}
                tests={pkg.tests}
                image={pkg.image}
                recommended={pkg.recommended}
                onBookPackage={() => handleBookPackage(pkg)}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/health-packages">
              <Button size="lg" variant="outline">
                View All Packages <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pharmacy Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <Badge className="mb-4">24/7 Pharmacy Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Quality Medicines Delivered to Your Doorstep
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our well-stocked pharmacy offers 100% genuine medicines from authorized distributors. 
                Order online and get same-day delivery within Visakhapatnam. Licensed pharmacists 
                available for consultation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">100% Genuine</h3>
                    <p className="text-sm text-muted-foreground">Authorized medicines</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Fast Delivery</h3>
                    <p className="text-sm text-muted-foreground">Same-day service</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Pill className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Expert Guidance</h3>
                    <p className="text-sm text-muted-foreground">Licensed pharmacists</p>
                  </div>
                </div>
              </div>
              <Link to="/pharmacy">
                <Button size="lg">
                  Order Medicines <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                {productsData.slice(0, 4).map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <div className="relative h-32 bg-accent">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-3">
                      <p className="font-semibold text-sm mb-1">{product.name}</p>
                      <p className="text-primary font-bold">₹{product.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={clinicBanner} 
                alt="About Vishakaha Multispeciality Clinic"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <Badge className="mb-4">About Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                10 Years of Excellence in Healthcare
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Vishakaha Multispeciality Clinic was established in 2014 with a vision to provide 
                world-class healthcare services to the people of Visakhapatnam. Our motto 
                "Treat with Respect" reflects our unwavering commitment to patient care and dignity.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                With 25+ highly qualified doctors, advanced medical equipment, NABL-accredited 
                diagnostic laboratory, 24/7 pharmacy services, and patient-centric care philosophy, 
                we have become Vizag's most trusted healthcare destination.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Quality Healthcare</h3>
                  <p className="text-sm text-muted-foreground">Advanced technology & expert care</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Patient First</h3>
                  <p className="text-sm text-muted-foreground">Compassionate & personalized</p>
                </div>
              </div>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Quality Healthcare?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book your appointment today at Visakhapatnam's leading multispeciality clinic. 
            Expert doctors, advanced diagnostics, and compassionate care await you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-appointment">
              <Button size="lg" variant="secondary">
                Book Appointment Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Quick Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Visit Our Clinics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Location 1:</strong><br />
                  Opp KGH Clock Tower, Jagadamba Junction
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Location 2:</strong><br />
                  Opp Tiles Mart, Madhurawada
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Call Us Anytime</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+918912345678" className="block text-lg font-semibold text-primary hover:underline mb-2">
                  +91 891 234 5678
                </a>
                <p className="text-sm text-muted-foreground">
                  Mon-Sat: 8AM-8PM<br />
                  Sun: 9AM-2PM
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@vishakahaclinic.com" className="block text-lg font-semibold text-primary hover:underline mb-2 break-all">
                  info@vishakahaclinic.com
                </a>
                <p className="text-sm text-muted-foreground">
                  We'll respond within 24 hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Visit Us
          </h2>
          <div className="max-w-4xl mx-auto">
            <GoogleMap />
          </div>
        </div>
      </section>

      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        type="package"
        title={`Book ${selectedPackage?.name || "Health Package"}`}
        options={packagesData.map(p => ({ id: p.id, name: p.name }))}
      />
    </div>
  );
};

export default Home;
