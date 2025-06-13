// src/app/models/feedback.model.ts

export interface DriveFeedback {
  ambience: number;
  features: number;
  ride_comfort: number;
  quality: number;
  dynamics: number;
  driving_experience: number;
}

export interface Feedback {
  purchase_potential: string;      
  drive_feedback: DriveFeedback;
  feedback_comments: string;
  time_frame: string;
}


export type PurchasePotential = 'Definitely' | 'Very likely' | 'Likely' | 'Not Likely';

export type TimeFrame = '< 15 days' | '15 days – 3 months' | '3 – 6 months' | '> 6 months';

