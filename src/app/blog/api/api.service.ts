import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
// import { Observable, Promise } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly API_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }

  // httpHeaders() {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*'
  //     })
  //   };
  //   return httpOptions;
  //
  // }

  getPosts(): Observable<{}> {
    return this.http.get('/api');
  }
}
