import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'feedback', component: FeedbackFormComponent },
  { path: '**', component: PageNotFoundComponent },
];
