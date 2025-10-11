import { useState } from "react";
import { useForm } from "react-hook-form";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeedbackCard from "@/components/FeedbackCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useFeedbackStore } from "@/store/feedbackStore";
import { toast } from "sonner";

interface FeedbackForm {
  name: string;
  rating: number;
  message: string;
}

const Feedback = () => {
  const { feedbacks, addFeedback } = useFeedbackStore();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FeedbackForm>();

  const onSubmit = (data: FeedbackForm) => {
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }

    addFeedback({
      name: data.name,
      rating,
      message: data.message,
    });

    toast.success("Thank you for your feedback!", {
      description: "Your review has been submitted successfully.",
    });

    reset();
    setRating(0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-6">
              Patient <span className="text-primary">Feedback</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Your feedback helps us improve our services and provide better healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="font-poppins text-2xl">Share Your Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Your Rating *</Label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`h-8 w-8 transition-colors ${
                              star <= (hoveredRating || rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Feedback *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your experience..."
                      {...register("message", { required: "Feedback message is required" })}
                      rows={5}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Feedback
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from our valued patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {feedbacks.map((feedback) => (
              <FeedbackCard
                key={feedback.id}
                name={feedback.name}
                rating={feedback.rating}
                message={feedback.message}
                date={feedback.date}
                avatar={feedback.avatar}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Feedback;
