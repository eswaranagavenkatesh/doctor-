import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Clock, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import GoogleMap from "@/components/GoogleMap";
import FeedbackForm from "@/components/FeedbackForm";
import FeedbackCard from "@/components/FeedbackCard";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import clinicBanner from "@/assets/clinic-banner.jpg";
import galleryData from "@/data/gallery.json";
import feedbackData from "@/data/feedback.json";

const About = () => {
  const stats = [
    { icon: Award, label: "Years of Excellence", value: "10+" },
    { icon: Users, label: "Patients Served", value: "50,000+" },
    { icon: Clock, label: "Expert Doctors", value: "25+" },
    { icon: Heart, label: "Success Rate", value: "98%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="About Vishakaha Multispeciality Clinic | 10 Years Excellence in Healthcare Visakhapatnam"
        description="Leading multispeciality hospital in Vizag with 10+ years of trusted healthcare excellence. 50,000+ patients served, 25+ expert doctors, modern facilities. Comprehensive medical care with compassion near KGH & Madhurawada."
        keywords="about vishakaha clinic, best hospital visakhapatnam, healthcare excellence vizag, multispeciality clinic history, trusted hospital vizag, medical facilities visakhapatnam, healthcare center vizag, patient care excellence"
        canonicalUrl="https://visakhamultispeciality.com/about"
      />
      <StructuredData 
        type="homepage" 
        data={{
          breadcrumb: [
            { name: "Home", url: "https://visakhamultispeciality.com" },
            { name: "About Us", url: "https://visakhamultispeciality.com/about" }
          ]
        }}
      />
      <Navbar />
      <PageBanner 
        title="About Vishakaha Multispeciality Clinic" 
        subtitle="A Decade of Excellence in Healthcare - Compassionate Care You Can Trust in Visakhapatnam"
        imageSrc={clinicBanner}
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story - Best Multispeciality Clinic in Visakhapatnam</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Vishakaha Multispeciality Clinic was established in 2014 with a vision to provide 
                world-class healthcare services to the people of Visakhapatnam and surrounding areas. 
                Over the past decade, we have grown from a small medical clinic to Vizag's most trusted 
                comprehensive healthcare facility, serving over 50,000 patients with excellence.
              </p>
              <p>
                Our motto "Treat with Respect" reflects our unwavering commitment to patient care and dignity. 
                We believe every patient deserves compassionate, personalized medical attention combined with 
                the best clinical treatment. Our multispeciality approach covers general medicine, cardiology, 
                pediatrics, gynecology, orthopedics, ENT, dermatology, and diabetology - all under one roof.
              </p>
              <p>
                With 25+ highly qualified doctors, advanced medical equipment, NABL-accredited diagnostic laboratory, 
                24/7 pharmacy services, and patient-centric care philosophy, Vishakaha Clinic has become synonymous 
                with quality healthcare in Visakhapatnam. We proudly serve patients from KGH Junction, Madhurawada, 
                Jagadamba, and across Andhra Pradesh.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <Card>
              <CardHeader>
                <CardTitle>What We Stand For</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Quality Healthcare</h3>
                  <p className="text-sm text-muted-foreground">
                    Providing the highest standard of medical care with advanced technology
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Patient First</h3>
                  <p className="text-sm text-muted-foreground">
                    Putting patient needs and comfort at the center of everything we do
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Accessible Care</h3>
                  <p className="text-sm text-muted-foreground">
                    Making quality healthcare accessible and affordable to all
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Continuous Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Staying updated with the latest medical advancements and technologies
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Facilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Modern Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Equipped with the latest medical equipment and comfortable facilities
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>In-House Laboratory</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Advanced diagnostic lab for accurate and timely test results
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>24/7 Pharmacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock pharmacy services with genuine medicines
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryData.map((item) => (
              <Card key={item.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Patient Feedback</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {feedbackData.slice(0, 4).map((feedback) => (
              <FeedbackCard 
                key={feedback.id} 
                name={feedback.name}
                rating={feedback.rating}
                message={feedback.message}
                date={feedback.date}
                avatar={feedback.avatar}
              />
            ))}
          </div>
          <div className="max-w-2xl mx-auto">
            <FeedbackForm />
          </div>
        </div>

        {/* Location Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Visit Us</h2>
          <GoogleMap />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
