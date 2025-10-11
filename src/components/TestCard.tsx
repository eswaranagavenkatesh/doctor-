import { Clock, IndianRupee, FlaskConical } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface TestCardProps {
  name: string;
  description: string;
  price: number;
  duration?: string;
  preparation?: string;
  onBookTest?: () => void;
}

const TestCard = ({ name, description, price, duration, preparation, onBookTest }: TestCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="bg-accent p-2 rounded-lg w-fit mb-2">
          <FlaskConical className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="font-poppins text-lg">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <IndianRupee className="h-4 w-4 text-primary mr-2" />
            <span className="font-semibold text-foreground">₹{price}</span>
          </div>
          {duration && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-primary mr-2" />
              <span>Results in {duration}</span>
            </div>
          )}
          {preparation && (
            <div className="bg-accent p-2 rounded-md">
              <p className="text-xs text-muted-foreground">
                <strong className="text-foreground">Preparation:</strong> {preparation}
              </p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onBookTest}>
          Book Test
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TestCard;
