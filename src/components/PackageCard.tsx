import { CheckCircle2, IndianRupee, Package } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface PackageCardProps {
  name: string;
  description: string;
  price: number;
  tests: string[];
  image?: string;
  recommended?: string;
  onBookPackage?: () => void;
}

const PackageCard = ({
  name,
  description,
  price,
  tests,
  image,
  recommended,
  onBookPackage,
}: PackageCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {image && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          {recommended && (
            <Badge className="absolute top-3 left-3 bg-success text-success-foreground">
              Recommended
            </Badge>
          )}
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="font-poppins text-xl mb-2">{name}</CardTitle>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="bg-primary p-2 rounded-lg ml-3">
            <Package className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-baseline">
          <IndianRupee className="h-5 w-5 text-primary mr-1" />
          <span className="text-2xl font-bold text-foreground">{price}</span>
          <span className="text-muted-foreground text-sm ml-2">Total</span>
        </div>
        
        {recommended && (
          <div className="bg-accent p-3 rounded-lg">
            <p className="text-xs text-muted-foreground">{recommended}</p>
          </div>
        )}

        <div>
          <p className="text-sm font-semibold text-foreground mb-2">Includes {tests.length} tests:</p>
          <ul className="space-y-1.5 max-h-32 overflow-y-auto">
            {tests.map((test, index) => (
              <li key={index} className="flex items-start text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                <span>{test}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onBookPackage}>
          Book Package
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
