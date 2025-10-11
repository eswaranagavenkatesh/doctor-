import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, IndianRupee, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import doctorsBanner from "@/assets/doctors-banner.jpg";

const DoctorClinic = () => {
  const doctors = [
    {
      name: "Dr. Rajesh Kumar",
      specialty: "General Medicine",
      qualification: "MBBS, MD",
      experience: "15 years",
      fee: "500",
      timing: "Mon-Sat, 9:00 AM - 5:00 PM",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Vikram Singh",
      specialty: "Cardiologist",
      qualification: "MBBS, MD, DM (Cardiology)",
      experience: "18 years",
      fee: "800",
      timing: "Mon-Fri, 9:00 AM - 3:00 PM",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Kavita Mehta",
      specialty: "Gynecologist",
      qualification: "MBBS, MD (Obs & Gyn)",
      experience: "16 years",
      fee: "650",
      timing: "Mon-Sat, 10:00 AM - 6:00 PM",
      image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Arjun Patel",
      specialty: "Pediatrician",
      qualification: "MBBS, MD (Pediatrics)",
      experience: "12 years",
      fee: "550",
      timing: "Mon-Sat, 10:00 AM - 4:00 PM",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Priya Sharma",
      specialty: "ENT Specialist",
      qualification: "MBBS, MS (ENT)",
      experience: "14 years",
      fee: "600",
      timing: "Mon-Fri, 11:00 AM - 5:00 PM",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Amit Desai",
      specialty: "Orthopedic",
      qualification: "MBBS, MS (Ortho)",
      experience: "20 years",
      fee: "750",
      timing: "Mon-Sat, 9:00 AM - 2:00 PM",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageBanner 
        title="Doctor Clinic" 
        subtitle="Expert medical consultations across multiple specializations"
        imageSrc={doctorsBanner}
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Link to="/book-appointment">
            <Button size="lg">View All Doctors & Book Appointment</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-muted">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4">
                  {doctor.specialty}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{doctor.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{doctor.qualification}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  <span>{doctor.experience} experience</span>
                </div>
                <div className="flex items-center text-sm">
                  <IndianRupee className="h-4 w-4 mr-2 text-primary" />
                  <span>Consultation: ₹{doctor.fee}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  <span>{doctor.timing}</span>
                </div>
                <Link to="/book-appointment">
                  <Button className="w-full mt-4">Book Appointment</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorClinic;
