import { Link } from "react-router-dom";
import { Heart, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Heart className="h-6 w-6 text-primary-foreground fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground leading-tight">
                  Vishakaha
                </span>
                <span className="text-sm text-muted-foreground leading-tight">
                  Multispeciality Clinic
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Your trusted partner in healthcare. Providing comprehensive medical services with care and compassion in Visakhapatnam.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-accent p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-accent p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="bg-accent p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-accent p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Packages", "Gallery", "Feedback"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Doctor Clinic",
                "Medical Lab",
                "Medical Shop",
                "Lifestyle Clinic",
                "Home Health Care",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  KGH Down, Opp KGH Clock Tower, Krishna Nagar, Jagadamba Junction, Visakhapatnam, Andhra Pradesh 530002
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+918912345678" className="text-muted-foreground hover:text-primary text-sm">
                  +91 891 234 5678
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@vishakahaclinic.com" className="text-muted-foreground hover:text-primary text-sm">
                  info@vishakahaclinic.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Working Hours:</strong><br />
                Mon - Sat: 8:00 AM - 8:00 PM<br />
                Sunday: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Vishakaha Multispeciality Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
