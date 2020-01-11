import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
// import { Observable, Promise } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly API_URL = 'http://127.0.0.1:8000/admin';
  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.post(`${this.API_URL}/login`, {credentials})
      .toPromise()
      .then(res => console.log(res))
      .catch(err => err);
  }
}
