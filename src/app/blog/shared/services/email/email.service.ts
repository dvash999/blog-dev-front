import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ResponseMessage} from '../../../../shared/models/responseMessage';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) {}
  readonly API_URL = 'http://127.0.0.1:8000/api';

  sendEmail(email): Promise<ResponseMessage> {
    return this.http
      .post(`${this.API_URL}/email`, {...email})
      .toPromise()
      .then(response => response)
      .catch(err => err);
  }
}
