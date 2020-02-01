import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { ROOT_URL } from '../../../blog/api/models/api-helper';
import { Observable } from 'rxjs';
import { Post } from '../models/Post.model';
import { ResponseMessage } from '../../../shared/models/responseMessage';
import { HttpHelperService } from '../../../shared/services/http-helper.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManagePostsService {
  MANAGE_POSTS_URL = `${ROOT_URL}/admin/posts`;

  constructor(private http: HttpClient) {}

  // getAllPosts(): Promise<Post[]> {
  //   //   return this.http
  //   //     .get<Post[]>(this.MANAGE_POSTS_URL)
  //   //     .toPromise()
  //   //     .then(res => res as Post[])
  //   //     .catch(err => err);
  //   // }

  getAllPosts(): Observable<Post[]> {
    return this.http
      .get<ResponseMessage>(this.MANAGE_POSTS_URL)
      .pipe(map(response => response.message));
  }

  addPost(post): Promise<ResponseMessage> {
    return this.http
      .post(`${this.MANAGE_POSTS_URL}`, post)
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
      .delete(`${this.MANAGE_POSTS_URL}/${postID}`)
      .toPromise()
      .then(response => response)
      .catch(err => err);
  }
}
