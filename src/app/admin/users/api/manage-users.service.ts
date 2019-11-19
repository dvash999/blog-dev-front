import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ROOT_URL} from '../../../api/http/modles/api-helper';
import {Observable} from 'rxjs';
import {User} from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {
  MANAGE_USERS_URL = `${ROOT_URL}/admin/users`;

  constructor(private http: HttpClient) { }

  static getHttpHeaders(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':  '*',
        'Access-Control-Allow-Headers':  'Content-Type, X-Auth-Token, Authorization, Origin',
        'Access-Control-Allow-Methods':  'GET, PUT, POST, DELETE'
      })
    };
  }

  getAllusers(): Observable<User[]> {
    return this.http.get<User[]>(this.MANAGE_USERS_URL, ManageUsersService.getHttpHeaders());
  }
}
