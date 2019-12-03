import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../admin/manage-posts/models/Post.model';
import {ROOT_URL} from '../../../api/models/api-helper';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API_URL = `${ROOT_URL}/posts`;

  constructor(private http: HttpClient) {}

  getAllPosts(): Promise<Post[]> {
    return this.http
      .get<Post[]>(this.API_URL)
      .toPromise()
      .then(res => res as Post[])
      .catch(err => err);
  }

  getSinglePost() {}

  likePost() {}

  commentPost() {}
}
