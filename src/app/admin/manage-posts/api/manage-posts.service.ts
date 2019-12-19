import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { ROOT_URL } from '../../../blog/api/models/api-helper';
import { Observable } from 'rxjs';
import { Post } from '../models/Post.model';
import { ResponseMessage } from '../../../blog/api/models/responseMessage';

@Injectable({
  providedIn: 'root'
})
export class ManagePostsService {
  MANAGE_POSTS_URL = `${ROOT_URL}/admin/posts`;

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

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error', errorResponse.error.message);
    } else {
      console.error('Server Side Error', errorResponse);
    }
    return new ErrorEvent('there was an error');
  }

  getAllPosts(): Promise<Post[]> {
    return this.http.get<Post[]>(this.MANAGE_POSTS_URL)
      .toPromise()
      .then(res => res as Post[])
      .catch(err => err);
  }

  addPost(post): Promise<ResponseMessage> {
    return this.http
      .post<ResponseMessage>(`${this.MANAGE_POSTS_URL}`, post)
      .toPromise()
      .then(response => response)
      .catch(err => err);
  }

  updatePost(post): Observable<ResponseMessage> {
    return this.http.put<ResponseMessage>(
      `${this.MANAGE_POSTS_URL}/${post.id}`,
      post
    );
  }

  deletePost(postID): Promise<ResponseMessage> {
    return this.http
      .delete(
        `${this.MANAGE_POSTS_URL}/${postID}`,
        ManagePostsService.getHttpHeaders()
      )
      .toPromise()
      .then(response => response)
      .catch(err => err);
  }
}
