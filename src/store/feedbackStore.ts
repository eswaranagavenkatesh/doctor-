import { create } from 'zustand';
import feedbackData from '@/data/feedback.json';

interface Feedback {
  id: string;
  name: string;
  rating: number;
  message: string;
  date: string;
  avatar?: string;
}

interface FeedbackStore {
  feedbacks: Feedback[];
  addFeedback: (feedback: Omit<Feedback, 'id' | 'date'>) => void;
}

export const useFeedbackStore = create<FeedbackStore>((set) => ({
  feedbacks: feedbackData,
  
  addFeedback: (feedback) => {
    set((state) => ({
      feedbacks: [
        {
          ...feedback,
          id: Date.now().toString(),
          date: new Date().toISOString(),
        },
        ...state.feedbacks,
      ],
    }));
  },
}));
