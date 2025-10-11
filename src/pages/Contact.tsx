import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import GoogleMap from "@/components/GoogleMap";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Contact Vishakaha Multispeciality Clinic Visakhapatnam | Location, Phone, Email"
        description="Contact best multispeciality clinic in Vizag. Visit us at KGH Junction & Madhurawada. Call +91 891 234 5678 for appointments, emergencies & medical inquiries. Open Mon-Sat 8AM-8PM, Sun 9AM-2PM."
        keywords="contact vishakaha clinic, clinic near KGH visakhapatnam, multispeciality hospital madhurawada, clinic phone number vizag, healthcare center contact vizag, medical clinic location visakhapatnam, doctor appointment contact, emergency clinic vizag"
        canonicalUrl="https://vishakahaclinic.com/contact"
      />
      <StructuredData 
        type="contact" 
        data={{
          breadcrumb: [
            { name: "Home", url: "https://vishakahaclinic.com" },
            { name: "Contact Us", url: "https://vishakahaclinic.com/contact" }
          ]
        }}
      />
      <Navbar />
      <PageBanner 
        title="Contact Vishakaha Multispeciality Clinic" 
        subtitle="Reach out to the best healthcare center in Visakhapatnam. We're here to help with appointments, medical inquiries, and emergency assistance."
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MapPin className="h-5 w-5 text-primary" />
                Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                KGH Down, Opp KGH Clock Tower<br />
                Krishna Nagar, Jagadamba Junction<br />
                Visakhapatnam, Andhra Pradesh 530002
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Phone className="h-5 w-5 text-primary" />
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href="tel:+918912345678" className="block text-sm font-semibold text-primary hover:underline">
                +91 891 234 5678
              </a>
              <a href="tel:+918912345679" className="block text-sm font-semibold text-primary hover:underline">
                +91 891 234 5679
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Mail className="h-5 w-5 text-primary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href="mailto:info@vishakahaclinic.com" className="block text-sm font-semibold text-primary hover:underline break-all">
                info@vishakahaclinic.com
              </a>
              <a href="mailto:appointments@vishakahaclinic.com" className="block text-sm font-semibold text-primary hover:underline break-all">
                appointments@vishakahaclinic.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="h-5 w-5 text-primary" />
                Working Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                <span className="font-semibold">Monday - Saturday</span><br />
                <span className="text-muted-foreground">8:00 AM - 8:00 PM</span>
              </p>
              <p className="text-sm mt-2">
                <span className="font-semibold">Sunday</span><br />
                <span className="text-muted-foreground">9:00 AM - 2:00 PM</span>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form and Map */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 1234567890"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div>
            <GoogleMap />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
