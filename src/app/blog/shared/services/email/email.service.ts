import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) {}
  readonly API_URL = 'http://127.0.0.1:8000/api';

  sendEmail(email) {
    console.log(email)
    return this.http
      .post(`${this.API_URL}/email`, email)
      .toPromise()
      .then(response => console.log(response))
      .catch(err => err);
  }
}
