import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ROOT_URL } from '../modles/api-helper';
import { Observable } from 'rxjs';
import { Post } from '../../../admin-dashboard/manage-posts/post.model';
import { ResponseMessage } from '../modles/responseMessage';

@Injectable({
  providedIn: 'root'
})
export class ManagePostsService {

  constructor(private http: HttpClient) { }

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
    const headers = new httpHeaders()
      .set('X-Auth', 'user-id');

    console.log(`${ROOT_URL}/posts/${post.id}`)
    return this.http.put<ResponseMessage>(`${ROOT_URL}/posts/${post.id}`, post, {headers});
  }
}
