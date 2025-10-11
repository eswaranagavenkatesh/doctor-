import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import BookingModal from "@/components/BookingModal";
import packagesData from "@/data/healthPackages.json";

const HealthPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookPackage = (pkg: any) => {
    setSelectedPackage(pkg);
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
              Health <span className="text-primary">Packages</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive health checkup packages designed for your wellness at affordable prices
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagesData.map((pkg) => (
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
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
              Why Choose Our Health Packages?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Comprehensive Screening",
                description: "Multiple tests bundled together for complete health assessment",
              },
              {
                title: "Cost-Effective",
                description: "Save up to 40% compared to individual test prices",
              },
              {
                title: "Expert Analysis",
                description: "Detailed report review by experienced doctors",
              },
              {
                title: "Home Sample Collection",
                description: "Free sample collection from your home at your convenience",
              },
              {
                title: "Fast Reports",
                description: "Get your comprehensive reports within 24-48 hours",
              },
              {
                title: "Follow-up Consultation",
                description: "Free consultation to discuss your health report",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="h-2 w-12 bg-primary rounded-full mb-4"></div>
                <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

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

export default HealthPackages;
