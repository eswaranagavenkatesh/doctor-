import { useState } from "react";
import { FlaskConical } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestCard from "@/components/TestCard";
import BookingModal from "@/components/BookingModal";
import testsData from "@/data/tests.json";

const MedicalLab = () => {
  const [selectedTest, setSelectedTest] = useState<any>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookTest = (test: any) => {
    setSelectedTest(test);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-6">
              <FlaskConical className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-6">
              Medical Lab & <span className="text-primary">Diagnostics</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Advanced diagnostic services with accurate results and home sample collection
            </p>
          </div>
        </div>
      </section>

      {/* Tests Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-foreground mb-4">
              Available Tests
            </h2>
            <p className="text-muted-foreground">
              Comprehensive range of diagnostic tests for all your health needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testsData.map((test) => (
              <TestCard
                key={test.id}
                name={test.name}
                description={test.description}
                price={test.price}
                duration={test.duration}
                preparation={test.preparation}
                onBookTest={() => handleBookTest(test)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-foreground mb-4">
              Why Choose Our Lab Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Accurate Results",
                description: "State-of-the-art equipment ensuring 99.9% accuracy",
              },
              {
                title: "Fast Turnaround",
                description: "Most test results available within 4-24 hours",
              },
              {
                title: "Home Collection",
                description: "Free home sample collection at your convenience",
              },
              {
                title: "Certified Lab",
                description: "NABL accredited laboratory with quality standards",
              },
              {
                title: "Expert Technicians",
                description: "Trained and experienced lab professionals",
              },
              {
                title: "Digital Reports",
                description: "Access your reports online anytime, anywhere",
              },
              {
                title: "Affordable Pricing",
                description: "Competitive rates without compromising quality",
              },
              {
                title: "Privacy & Safety",
                description: "Complete confidentiality and hygiene protocols",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="h-1 w-12 bg-primary rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Collection Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-foreground mb-4">
              How Home Sample Collection Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Book Test", desc: "Select your test and preferred time slot" },
              { step: "2", title: "Sample Collection", desc: "Technician visits your home for sample collection" },
              { step: "3", title: "Lab Processing", desc: "Samples processed in our certified laboratory" },
              { step: "4", title: "Get Results", desc: "Receive digital reports via email/SMS" },
            ].map((process) => (
              <div key={process.step} className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        type="test"
        title={`Book ${selectedTest?.name || "Test"}`}
        options={testsData.map(t => ({ id: t.id, name: t.name }))}
      />
    </div>
  );
};

export default MedicalLab;
