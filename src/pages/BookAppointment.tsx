import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Stethoscope, TestTube } from "lucide-react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import PageBanner from "@/components/PageBanner";
import { toast } from "sonner";

const BookAppointment = () => {
  const navigate = useNavigate();
  const [appointmentType, setAppointmentType] = useState<string>("");
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!appointmentType) {
      toast.error("Please select appointment type");
      return;
    }
    
    if (!date) {
      toast.error("Please select appointment date");
      return;
    }

    toast.success("Appointment booked successfully! We'll contact you soon.");
    setTimeout(() => navigate("/"), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageBanner 
        title="Book Appointment" 
        subtitle="Schedule your visit with our healthcare professionals"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Book Your Appointment</CardTitle>
              <CardDescription>
                Please fill in your details and select the type of appointment you need
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Appointment Type Selection */}
                <div className="space-y-3">
                  <Label className="text-base">What type of appointment do you need?</Label>
                  <RadioGroup value={appointmentType} onValueChange={setAppointmentType}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card 
                        className={cn(
                          "cursor-pointer transition-all hover:shadow-md",
                          appointmentType === "doctor" && "ring-2 ring-primary"
                        )}
                        onClick={() => setAppointmentType("doctor")}
                      >
                        <CardContent className="flex items-center space-x-4 p-6">
                          <RadioGroupItem value="doctor" id="doctor" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Stethoscope className="h-5 w-5 text-primary" />
                              <Label htmlFor="doctor" className="text-base font-semibold cursor-pointer">
                                Doctor Consultation
                              </Label>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Book an appointment with our specialist doctors
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card 
                        className={cn(
                          "cursor-pointer transition-all hover:shadow-md",
                          appointmentType === "lab" && "ring-2 ring-primary"
                        )}
                        onClick={() => setAppointmentType("lab")}
                      >
                        <CardContent className="flex items-center space-x-4 p-6">
                          <RadioGroupItem value="lab" id="lab" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <TestTube className="h-5 w-5 text-primary" />
                              <Label htmlFor="lab" className="text-base font-semibold cursor-pointer">
                                Lab Tests
                              </Label>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Schedule laboratory tests and diagnostics
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </RadioGroup>
                </div>

                {/* Personal Information */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Preferred Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Any specific requirements or symptoms"
                      rows={4}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Confirm Appointment
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Location Section */}
          <div className="mt-8">
            <GoogleMap />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookAppointment;
