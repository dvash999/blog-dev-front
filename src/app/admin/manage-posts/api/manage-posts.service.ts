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
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ManagePostsService {
  readonly MANAGE_POSTS_URL = `${ROOT_URL}/admin/posts`;

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http
      .get<ResponseMessage>(this.MANAGE_POSTS_URL)
      .pipe(map(response => response.message));
  }

  getPost(id): Promise<ResponseMessage> {
    return this.http
      .get(`${this.MANAGE_POSTS_URL}/${id}`)
      .toPromise()
      .then(res => res)
      .catch(err => err);
  }

  addPost(post): Promise<ResponseMessage> {
    return this.http
      .post(`${this.MANAGE_POSTS_URL}`, this.createFormData(post))
      .toPromise()
      .then(response => response)
      .catch(err => err);
  }

  createFormData(post): FormData {
    const formData = new FormData();
    formData.append('img', post.img);
    delete post.img;
    formData.append('data', JSON.stringify(post));
    return formData;
  }

  updatePost(post): Promise<ResponseMessage> {
    return this.http
      .post<ResponseMessage>(
        `${this.MANAGE_POSTS_URL}/${post.id}/updatePost`,
        this.createFormData(post)
      )
      .toPromise()
      .then(res => res)
      .catch(err => err);
  }

  deletePost(postID): Promise<ResponseMessage> {
    return this.http
      .delete(`${this.MANAGE_POSTS_URL}/${postID}`)
      .toPromise()
      .then(response => response)
      .catch(err => err);
  }
}
