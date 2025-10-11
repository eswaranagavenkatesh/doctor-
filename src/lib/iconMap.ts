import { Stethoscope, Microscope, Pill, Heart, Home, LucideIcon } from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Microscope,
  Pill,
  Heart,
  Home
};

export const getIconComponent = (iconName: string): LucideIcon => {
  return iconMap[iconName] || Stethoscope;
};
