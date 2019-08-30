import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { ROOT_URL } from '../../../api/http/modles/api-helper';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { ResponseMessage } from '../../../api/http/modles/responseMessage';

@Injectable({
  providedIn: 'root'
})
export class ManagePostsApiService {

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


  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error', errorResponse.error.message);
    } else {
      console.error('Server Side Error', errorResponse);
    }
    return new ErrorEvent('there was an error');
  }

  // getAllPosts(): Promise<Post[]> {
  //   return this.http.get(`${ROOT_URL}/posts`)
  //     .toPromise()
  //     .then( posts => posts as Post[])
  //     .catch(err => err);
  // }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${ROOT_URL}/posts`);
  }


  uploadPost(post): Observable<ResponseMessage> {
    return this.http.post<ResponseMessage>(`${ROOT_URL}/posts`, post);
  }

  updatePost(post): Observable<ResponseMessage> {
    return this.http.put<ResponseMessage>(`${ROOT_URL}/posts/${post.id}`, post);
  }

  deletePost(postID): Promise<ResponseMessage> {
    return this.http.delete(`${ROOT_URL}/posts/${postID}`, ManagePostsApiService.getHttpHeaders())
      .toPromise()
      .then(response => response)
      .catch(err => err);
  }
}
