import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface FeedbackCardProps {
  name: string;
  rating: number;
  message: string;
  date: string;
  avatar?: string;
}

const FeedbackCard = ({ name, rating, message, date, avatar }: FeedbackCardProps) => {
  return (
    <Card className="hover:shadow-md transition-all duration-300">
      <CardContent className="pt-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                className="h-12 w-12 rounded-full bg-accent"
              />
            ) : (
              <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-primary font-semibold text-lg">
                  {name.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-foreground">{name}</h4>
              <span className="text-xs text-muted-foreground">
                {new Date(date).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`h-4 w-4 ${
                    index < rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{message}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedbackCard;
