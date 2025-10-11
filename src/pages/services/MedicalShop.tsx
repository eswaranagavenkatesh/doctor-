import { useState } from "react";
import { ShoppingCart, Package, IndianRupee, Pill, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useCartStore } from "@/store/cartStore";
import productsData from "@/data/products.json";
import { toast } from "sonner";

const MedicalShop = () => {
  const { items, addItem, removeItem, updateQuantity, getTotalItems, getTotalPrice, clearCart } = useCartStore();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast.success(`${product.name} added to cart!`);
  };

  const handleCheckout = () => {
    toast.success("Order placed successfully!", {
      description: "We'll deliver your medicines within 24 hours.",
    });
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-6">
              <Pill className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-6">
              Medical <span className="text-primary">Shop</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Quality medicines and healthcare products with doorstep delivery
            </p>
            <Button
              size="lg"
              onClick={() => setIsCartOpen(true)}
              className="relative"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              View Cart
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-success text-success-foreground">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-foreground mb-4">
              Our Products
            </h2>
            <p className="text-muted-foreground">
              Browse our wide range of quality medicines and healthcare products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsData.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
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
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-foreground mb-4">
              Why Buy From Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Genuine Products",
                description: "100% authentic medicines from authorized distributors",
              },
              {
                title: "Fast Delivery",
                description: "Same-day delivery within city limits",
              },
              {
                title: "Best Prices",
                description: "Competitive pricing with regular discounts",
              },
              {
                title: "Expert Guidance",
                description: "Pharmacist available for consultation",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border text-center hover:shadow-lg transition-all duration-300"
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

      <Footer />

      {/* Cart Modal */}
      <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-poppins text-2xl">Shopping Cart</DialogTitle>
          </DialogHeader>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 bg-accent/30 p-4 rounded-lg">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">₹{item.price} each</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-foreground">₹{item.price * item.quantity}</p>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-foreground">Total:</span>
                  <span className="text-2xl font-bold text-primary">₹{getTotalPrice()}</span>
                </div>
                <Button className="w-full" size="lg" onClick={handleCheckout}>
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MedicalShop;
