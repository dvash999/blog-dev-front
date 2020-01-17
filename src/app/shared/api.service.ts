import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseMessage } from './models/responseMessage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly API_URL = 'http://127.0.0.1:8000/api/admin';

  constructor(private http: HttpClient) { }

  isAuthenticated(): any {
    const token = sessionStorage.getItem('token');
    return this.http.post<ResponseMessage>(`${this.API_URL}/auth`, {token})
      .toPromise()
      .then(res => {
        console.log('rrr', res)
        return res.message
      })
      .catch(err => err);
  }
}
