import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHelperService } from '../../../../shared/services/http-helper.service';
import {Like} from '../like.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  readonly API_URL = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) {}

  getLikesByID(type, typeID): Observable<number> {
    return this.http.get<number>(`${this.API_URL}/likes/${type}/${typeID}`);
  }

  like(type: string, typeID: number) {
    return this.http
      .post<Like>(`${this.API_URL}/likes`, {type, typeID}, HttpHelperService.getHttpHeaders())
      .toPromise()
      .then(response => response)
      .catch(err => err);
  }
}
