import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import labBanner from "@/assets/lab-banner.jpg";

const Packages = () => {
  const packages = [
    {
      name: "Basic Health Checkup",
      price: "₹1,999",
      popular: false,
      tests: [
        "Complete Blood Count (CBC)",
        "Blood Sugar (Fasting)",
        "Lipid Profile",
        "Liver Function Test",
        "Kidney Function Test",
        "Urine Analysis"
      ]
    },
    {
      name: "Comprehensive Health Checkup",
      price: "₹3,999",
      popular: true,
      tests: [
        "All tests from Basic Package",
        "Thyroid Profile",
        "Vitamin D3",
        "Vitamin B12",
        "ECG",
        "Chest X-Ray",
        "Doctor Consultation"
      ]
    },
    {
      name: "Diabetes Care Package",
      price: "₹2,499",
      popular: false,
      tests: [
        "HbA1c",
        "Blood Sugar (Fasting & PP)",
        "Lipid Profile",
        "Kidney Function Test",
        "Urine Microalbumin",
        "Diabetic Foot Assessment"
      ]
    },
    {
      name: "Women's Health Package",
      price: "₹4,499",
      popular: false,
      tests: [
        "Complete Blood Count",
        "Thyroid Profile",
        "Iron Studies",
        "Vitamin D & B12",
        "Pap Smear",
        "Mammography",
        "Bone Density Test",
        "Gynecologist Consultation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageBanner 
        title="Health Packages" 
        subtitle="Customized health checkup packages for your wellness"
        imageSrc={labBanner}
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className={pkg.popular ? "ring-2 ring-primary" : ""}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  {pkg.popular && <Badge>Most Popular</Badge>}
                </div>
                <CardDescription className="text-3xl font-bold text-primary">
                  {pkg.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.tests.map((test, testIndex) => (
                    <li key={testIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{test}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/book-appointment">
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                    Book Package
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-muted/50">
          <CardHeader>
            <CardTitle>Package Benefits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="flex items-center text-sm">
              <Check className="h-4 w-4 text-primary mr-2" />
              Free home sample collection available
            </p>
            <p className="flex items-center text-sm">
              <Check className="h-4 w-4 text-primary mr-2" />
              Reports delivered within 24-48 hours
            </p>
            <p className="flex items-center text-sm">
              <Check className="h-4 w-4 text-primary mr-2" />
              Doctor consultation included in select packages
            </p>
            <p className="flex items-center text-sm">
              <Check className="h-4 w-4 text-primary mr-2" />
              Digital reports accessible online anytime
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Packages;
