import { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DoctorCard from "@/components/DoctorCard";
import BookingModal from "@/components/BookingModal";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import doctorsData from "@/data/doctors.json";

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const categories = ["All", "General Medicine", "Sugar Clinic", "Pediatrics", "ENT"];

  const filteredDoctors = (category: string) => {
    let filtered = doctorsData;

    if (category !== "All") {
      filtered = filtered.filter((doc) => doc.category === category);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (doc) =>
          doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doc.specialization.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const handleBookAppointment = (doctor: any) => {
    setSelectedDoctor(doctor);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Best Doctors in Visakhapatnam | Expert Specialists at Vishakaha Multispeciality Clinic"
        description="Consult experienced specialist doctors in Vizag - Cardiologists, Pediatricians, Gynecologists, ENT specialists, General physicians & more. 25+ expert doctors with online appointment booking. Best medical care near KGH & Madhurawada."
        keywords="best doctors visakhapatnam, cardiologist vizag, pediatrician visakhapatnam, gynecologist vizag, general physician near me, ENT specialist visakhapatnam, diabetologist vizag, orthopedic doctor visakhapatnam, dermatologist vizag, medical specialist near KGH, doctor consultation online vizag"
        canonicalUrl="https://visakhamultispeciality.com/doctors"
      />
      <StructuredData 
        type="doctor" 
        data={{
          breadcrumb: [
            { name: "Home", url: "https://visakhamultispeciality.com" },
            { name: "Doctors", url: "https://visakhamultispeciality.com/doctors" }
          ]
        }}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-6">
              Best Specialist <span className="text-primary">Doctors in Visakhapatnam</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Consult 25+ highly qualified medical specialists across multiple specializations. Expert care with compassion for all your health needs in Vizag.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name or specialization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Listing */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 md:grid-cols-5 mb-12">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDoctors(category).map((doctor) => (
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

                {filteredDoctors(category).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                      No doctors found matching your search.
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
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

export default Doctors;
