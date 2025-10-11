import { Calendar, Award, IndianRupee } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface DoctorCardProps {
  name: string;
  specialization: string;
  experience: string;
  fee: number;
  image: string;
  qualifications?: string;
  availability?: string;
  onBookAppointment?: () => void;
}

const DoctorCard = ({
  name,
  specialization,
  experience,
  fee,
  image,
  qualifications,
  availability,
  onBookAppointment,
}: DoctorCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden bg-accent">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
          {specialization}
        </Badge>
      </div>
      <CardContent className="pt-4">
        <h3 className="font-poppins font-semibold text-lg text-foreground mb-1">{name}</h3>
        {qualifications && (
          <p className="text-sm text-muted-foreground mb-3">{qualifications}</p>
        )}
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Award className="h-4 w-4 text-primary mr-2" />
            <span>{experience} experience</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <IndianRupee className="h-4 w-4 text-primary mr-2" />
            <span>Consultation: ₹{fee}</span>
          </div>
          {availability && (
            <div className="flex items-start text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary mr-2 mt-0.5" />
              <span className="text-xs">{availability}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={onBookAppointment}
        >
          <Calendar className="h-4 w-4 mr-2" />
          Book Appointment
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
