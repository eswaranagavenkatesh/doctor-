import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "appointment" | "test" | "package" | "service";
  title: string;
  options?: Array<{ id: string; name: string }>;
}

interface FormData {
  name: string;
  phone: string;
  email?: string;
  selection?: string;
  date: string;
  time?: string;
  message?: string;
}

const BookingModal = ({ isOpen, onClose, type, title, options }: BookingModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, control, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Booking submitted:", data);
    toast.success("Booking Confirmed!", {
      description: "We'll contact you shortly to confirm your appointment.",
    });
    
    setIsSubmitting(false);
    reset();
    onClose();
  };

  const getSelectionLabel = () => {
    switch (type) {
      case "appointment":
        return "Select Doctor";
      case "test":
        return "Select Test";
      case "package":
        return "Select Package";
      default:
        return "Select Option";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-poppins text-2xl">{title}</DialogTitle>
          <DialogDescription>
            Fill in your details and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              className={errors.name ? "border-destructive" : ""}
              {...register("name", { 
                required: "Name is required",
                minLength: { value: 2, message: "Name must be at least 2 characters" }
              })}
            />
            {errors.name && (
              <p className="text-sm text-destructive flex items-center gap-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 1234567890"
              className={errors.phone ? "border-destructive" : ""}
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9+\-\s()]{10,}$/,
                  message: "Please enter a valid phone number (at least 10 digits)",
                },
              })}
            />
            {errors.phone && (
              <p className="text-sm text-destructive flex items-center gap-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email (Optional)</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              className={errors.email ? "border-destructive" : ""}
              {...register("email", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          {options && options.length > 0 && (
            <div className="space-y-2">
              <Label htmlFor="selection">{getSelectionLabel()} *</Label>
              <Controller
                name="selection"
                control={control}
                rules={{ required: `Please select a ${getSelectionLabel().toLowerCase()}` }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className={errors.selection ? "border-destructive" : ""}>
                      <SelectValue placeholder={`Choose ${getSelectionLabel().toLowerCase()}`} />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-50">
                      {options.map((option) => (
                        <SelectItem key={option.id} value={option.id}>
                          {option.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.selection && (
                <p className="text-sm text-destructive">{errors.selection.message}</p>
              )}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Preferred Date *</Label>
              <Input
                id="date"
                type="date"
                className={errors.date ? "border-destructive" : ""}
                {...register("date", { required: "Date is required" })}
                min={new Date().toISOString().split("T")[0]}
              />
              {errors.date && (
                <p className="text-sm text-destructive">{errors.date.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Preferred Time</Label>
              <Input
                id="time"
                type="time"
                {...register("time")}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Notes (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Any specific requirements or concerns..."
              rows={3}
              {...register("message")}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Confirm Booking"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
