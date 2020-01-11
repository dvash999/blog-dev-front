import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
// import { Observable, Promise } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly API_URL = 'http://127.0.0.1:8000/api/admin';
  constructor(private http: HttpClient) { }

  login(email, password) {
    return this.http.post(`${this.API_URL}/login`, {email, password})
      .toPromise()
      .then(res => console.log(res))
      .catch(err => err);
  }
}
