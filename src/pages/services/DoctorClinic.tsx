import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DoctorCard from "@/components/DoctorCard";
import BookingModal from "@/components/BookingModal";
import doctorsData from "@/data/doctors.json";
import { Link } from "react-router-dom";

const DoctorClinic = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const categories = ["General Medicine", "Sugar Clinic", "Pediatrics", "ENT"];

  const getDoctorsByCategory = (category: string) => {
    return doctorsData.filter((doctor) => doctor.category === category);
  };

  const handleBookAppointment = (doctor: any) => {
    setSelectedDoctor(doctor);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-6">
              Doctor <span className="text-primary">Clinic</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert medical consultations across multiple specializations
            </p>
          </div>
        </div>
      </section>

      {/* Quick Access to All Doctors */}
      <section className="py-8 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <Link 
              to="/doctors"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <User className="h-5 w-5 mr-2" />
              View All Doctors
            </Link>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="General Medicine" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 md:grid-cols-4 mb-12">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="mb-8">
                  <h2 className="font-poppins font-bold text-2xl text-foreground mb-2">
                    {category} Specialists
                  </h2>
                  <p className="text-muted-foreground">
                    Experienced doctors ready to provide quality healthcare
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getDoctorsByCategory(category).map((doctor) => (
                    <DoctorCard
                      key={doctor.id}
                      name={doctor.name}
                      specialization={doctor.specialization}
                      experience={doctor.experience}
                      fee={doctor.fee}
                      image={doctor.image}
                      qualifications={doctor.qualifications}
                      availability={doctor.availability}
                      onBookAppointment={() => handleBookAppointment(doctor)}
                    />
                  ))}
                </div>

                {getDoctorsByCategory(category).length === 0 && (
                  <div className="text-center py-12 bg-accent/30 rounded-2xl">
                    <p className="text-muted-foreground">
                      No doctors available in this category at the moment.
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-foreground mb-4">
              Why Choose Our Doctor Clinic?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Experienced Doctors",
                description: "All our doctors have 10+ years of clinical experience",
              },
              {
                title: "Easy Appointment Booking",
                description: "Book your appointment online or via phone in minutes",
              },
              {
                title: "Comprehensive Care",
                description: "From diagnosis to treatment, we cover all your healthcare needs",
              },
              {
                title: "Affordable Consultation",
                description: "Quality healthcare at competitive consultation fees",
              },
              {
                title: "Follow-up Support",
                description: "Free follow-up consultations for ongoing treatment",
              },
              {
                title: "Patient Records",
                description: "Digital health records for seamless care continuity",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="h-2 w-12 bg-primary rounded-full mb-4"></div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        type="appointment"
        title={`Book Appointment with ${selectedDoctor?.name || "Doctor"}`}
        options={[{ id: selectedDoctor?.id || "1", name: selectedDoctor?.name || "" }]}
      />
    </div>
  );
};

export default DoctorClinic;
