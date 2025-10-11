import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  route: string;
  features?: string[];
}

const ServiceCard = ({ title, description, icon: Icon, route, features }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card">
      <CardHeader>
        <div className="bg-accent p-3 rounded-lg w-fit mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
          <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
        </div>
        <CardTitle className="font-poppins text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {features && features.length > 0 && (
          <ul className="space-y-2 mb-4">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        <Link to={route}>
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
            Learn More
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
