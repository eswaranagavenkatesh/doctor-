import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GoogleMap = () => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-accent/30 p-4 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Find Us Here</h3>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.8288732883836!2d83.29996!3d17.71072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431c3dc6f861%3A0x1fe16530ec94d4df!2sKGH%20Clock%20Tower!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </CardContent>
    </Card>
  );
};

export default GoogleMap;
