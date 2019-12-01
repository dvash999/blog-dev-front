import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ROOT_URL } from '../../../blog/api/http/modles/api-helper';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';
import { ResponseMessage } from '../../../blog/api/http/modles/responseMessage';

@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {
  MANAGE_USERS_URL = `${ROOT_URL}/admin/users`;

  constructor(private http: HttpClient) {}

  static getHttpHeaders(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'Content-Type, X-Auth-Token, Authorization, Origin',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE'
      })
    };
  }

  getAllusers(): Promise<User[]> {
    return this.http
      .get<User[]>(this.MANAGE_USERS_URL)
      .toPromise()
      .then(users => users)
      .catch(err => err);
  }

  deleteUser(id): Promise<ResponseMessage> {
    return this.http
      .delete<User>(`${this.MANAGE_USERS_URL}/${id}}`)
      .toPromise()
      .then(users => users)
      .catch(err => err);
  }
}
