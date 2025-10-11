import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import visakhaLogo from "@/assets/visakha-logo.jpg";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Packages", path: "/packages" },
    { name: "Pharmacy", path: "/pharmacy" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo and Name */}
        <Link to="/" className="flex items-center space-x-2 md:space-x-3 hover-scale">
          <img src={visakhaLogo} alt="Visakha Clinics" className="h-10 md:h-12 w-auto" />
          <div className="hidden sm:block">
            <h1 className="text-base md:text-lg font-bold text-primary leading-tight">VISAKHA</h1>
            <p className="text-[10px] md:text-xs text-muted-foreground leading-tight">Multi Speciality Clinics</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={isActive(item.path) ? "default" : "ghost"}
                className="text-sm font-medium"
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2">
          <Link to="/contact" className="hidden md:block">
            <Button variant="ghost" size="icon" className="hover-scale">
              <Phone className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/book-appointment" className="hidden sm:block">
            <Button size="sm" className="md:text-sm">
              Book Appointment
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link key={item.path} to={item.path}>
                    <Button
                      variant={isActive(item.path) ? "default" : "ghost"}
                      className="w-full justify-start text-base"
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
                <Link to="/contact">
                  <Button variant="outline" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Us
                  </Button>
                </Link>
                <Link to="/book-appointment">
                  <Button className="w-full">Book Appointment</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
