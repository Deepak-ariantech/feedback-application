// src/app/services/feedback.service.ts

import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private endpoint = `${environment.apiBaseUrl}api/global/events/submit-feedback/0020785d-9ca4-4019-b306-eba94227ddf9`;

  constructor(private http: HttpClient) {}

  submitFeedback(feedback: Feedback): Observable<any> {
    return this.http.put<any>(this.endpoint, feedback);
  }
}
