import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Pill, ShieldCheck, Truck, IndianRupee } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import pharmacyBanner from "@/assets/pharmacy-banner.jpg";
import productsData from "@/data/products.json";
import { toast } from "sonner";

const Pharmacy = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [orderForm, setOrderForm] = useState({
    name: "",
    phone: "",
    address: "",
    quantity: 1
  });
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Order placed successfully! We'll contact you shortly.");
    setIsOrderModalOpen(false);
    setOrderForm({ name: "", phone: "", address: "", quantity: 1 });
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Enquiry submitted! We'll get back to you soon.");
    setIsEnquiryModalOpen(false);
    setEnquiryForm({ name: "", phone: "", email: "", message: "" });
  };

  const features = [
    {
      title: "100% Genuine",
      description: "All medicines are sourced from authorized distributors"
    },
    {
      title: "Fast Delivery",
      description: "Same-day delivery available within city limits"
    },
    {
      title: "Expert Guidance",
      description: "Licensed pharmacist available for consultation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageBanner 
        title="CarePlus Pharmacy" 
        subtitle="Quality medicines delivered to your doorstep. Upload prescription or contact us for medicine enquiries."
        imageSrc={pharmacyBanner}
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" onClick={() => setIsEnquiryModalOpen(true)}>
            Order Medicine
          </Button>
          <Button size="lg" variant="outline" onClick={() => setIsEnquiryModalOpen(true)}>
            Medicine Enquiry
          </Button>
        </div>

        {/* Available Medicines Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">Available Medicines</h2>
          <p className="text-center text-muted-foreground mb-8">
            Browse our comprehensive range of quality medicines
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsData.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-48 bg-accent">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {!product.inStock && (
                    <Badge className="absolute top-3 right-3 bg-destructive">
                      Out of Stock
                    </Badge>
                  )}
                  {product.prescription && (
                    <Badge className="absolute top-3 left-3 bg-secondary">
                      Rx Required
                    </Badge>
                  )}
                </div>
                <CardContent className="pt-4">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline">
                      <IndianRupee className="h-4 w-4 text-primary mr-1" />
                      <span className="text-xl font-bold text-foreground">{product.price}</span>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => {
                        setSelectedProduct(product);
                        setIsOrderModalOpen(true);
                      }}
                      disabled={!product.inStock}
                    >
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Pharmacy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="h-1 w-12 bg-primary rounded-full mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      {/* Order Modal */}
      <Dialog open={isOrderModalOpen} onOpenChange={setIsOrderModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Order Medicine</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleOrderSubmit} className="space-y-4">
            {selectedProduct && (
              <div className="bg-accent/30 p-4 rounded-lg">
                <p className="font-semibold">{selectedProduct.name}</p>
                <p className="text-sm text-muted-foreground">₹{selectedProduct.price}</p>
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="order-name">Full Name *</Label>
              <Input
                id="order-name"
                value={orderForm.name}
                onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="order-phone">Phone Number *</Label>
              <Input
                id="order-phone"
                value={orderForm.phone}
                onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                placeholder="+91 1234567890"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="order-address">Delivery Address *</Label>
              <Textarea
                id="order-address"
                value={orderForm.address}
                onChange={(e) => setOrderForm({ ...orderForm, address: e.target.value })}
                placeholder="Your complete address"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="order-quantity">Quantity *</Label>
              <Input
                id="order-quantity"
                type="number"
                min="1"
                value={orderForm.quantity}
                onChange={(e) => setOrderForm({ ...orderForm, quantity: parseInt(e.target.value) })}
                required
              />
            </div>
            <Button type="submit" className="w-full">Place Order</Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Enquiry Modal */}
      <Dialog open={isEnquiryModalOpen} onOpenChange={setIsEnquiryModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Medicine Enquiry</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEnquirySubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="enquiry-name">Full Name *</Label>
              <Input
                id="enquiry-name"
                value={enquiryForm.name}
                onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="enquiry-phone">Phone Number *</Label>
              <Input
                id="enquiry-phone"
                value={enquiryForm.phone}
                onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                placeholder="+91 1234567890"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="enquiry-email">Email Address *</Label>
              <Input
                id="enquiry-email"
                type="email"
                value={enquiryForm.email}
                onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="enquiry-message">Message *</Label>
              <Textarea
                id="enquiry-message"
                value={enquiryForm.message}
                onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                placeholder="Tell us about the medicines you need..."
                required
              />
            </div>
            <Button type="submit" className="w-full">Submit Enquiry</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Pharmacy;
