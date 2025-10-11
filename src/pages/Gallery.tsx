import { useState } from "react";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
      title: "Medical Team",
      category: "Team",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop",
      title: "Modern Consultation Room",
      category: "Facilities",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&h=600&fit=crop",
      title: "Patient Care",
      category: "Services",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=600&fit=crop",
      title: "Diagnostic Lab",
      category: "Facilities",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      title: "Healthcare Technology",
      category: "Equipment",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&h=600&fit=crop",
      title: "Cardiac Care",
      category: "Services",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop",
      title: "Women's Health",
      category: "Services",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=600&fit=crop",
      title: "Waiting Area",
      category: "Facilities",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800&h=600&fit=crop",
      title: "Reception",
      category: "Facilities",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-6">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Take a virtual tour of our state-of-the-art facilities and caring environment
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] bg-accent"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-lg mb-1">
                      {image.title}
                    </p>
                    <p className="text-white/80 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-auto"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
