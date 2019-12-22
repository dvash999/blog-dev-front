import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
  constructor() {}

  static getHttpHeaders(): any {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Authorization, Origin',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE'
    });
  }
}
