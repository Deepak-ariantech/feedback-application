import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { MatSnackBar } from '@angular/material/snack-bar';


import { FeedbackService } from '../../services/feedback.service';
import { Feedback } from '../../models/feedback.model';


@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  imports: [CommonModule, FormsModule, MatChipsModule, MatIconModule],
  styleUrl: './feedback-form.component.css',
})
export class FeedbackFormComponent {

 constructor(
  private feedbackService: FeedbackService,
  private snackBar: MatSnackBar
) {}

  ratings: { label: string; value: number }[] = [
    { label: 'OVERALL AMBIENCE', value: 0 },
    { label: 'FEATURES', value: 0 },
    { label: 'RIDE AND COMFORT', value: 0 },
    { label: 'QUALITY', value: 0 },
    { label: 'DYNAMICS', value: 0 },
    { label: 'DRIVING EXPERIENCE', value: 0 },
  ];

  comment: string = '';

  potentialOptions: string[] = [
    'Definitely',
    'Very likely',
    'Likely',
    'Not Likely',
  ];
  selectedPotential: string = '';

  timeFrames: string[] = [
    '< 15 days',
    '15 days – 3 months',
    '3 – 6 months',
    '> 6 months',
  ];
  selectedTimeFrame: string = '';

  setRating(index: number, value: number) {
    this.ratings[index].value = value;
  }

submitFeedback() {
  const hasRating = this.ratings.some(r => r.value > 0);
  const isCommentFilled = this.comment.trim().length > 0;
  const isPotentialSelected = !!this.selectedPotential;
  const isTimeFrameSelected = !!this.selectedTimeFrame;

  if (!hasRating || !isCommentFilled || !isPotentialSelected || !isTimeFrameSelected) {
    this.snackBar.open('Please fill the feedback before submitting.', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    return; // Prevent API call
  }

  const feedback: Feedback = {
    purchase_potential: this.selectedPotential,
    feedback_comments: this.comment,
    time_frame: this.selectedTimeFrame,
    drive_feedback: {
      ambience: this.ratings[0].value,
      features: this.ratings[1].value,
      ride_comfort: this.ratings[2].value,
      quality: this.ratings[3].value,
      dynamics: this.ratings[4].value,
      driving_experience: this.ratings[5].value,
    }
  };

  this.feedbackService.submitFeedback(feedback).subscribe({
    next: (res) => {
      console.log('Feedback submitted successfully:', res);
      this.snackBar.open('Feedback submitted successfully!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    },
    error: (err) => {
      console.error('Error submitting feedback:', err);
      this.snackBar.open(err?.error?.message || 'Something went wrong.', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }
  });
}





  







}




