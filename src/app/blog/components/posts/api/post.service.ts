import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '../../../../admin/manage-posts/models/Post.model';
import { ROOT_URL } from '../../../api/models/api-helper';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API_URL = `${ROOT_URL}/posts`;

  constructor(private http: HttpClient) {}

  getAllPosts(filter: string): Promise<Post[]> {
    let params = null;
    if (filter) params = this.setParams(filter);

    return this.http
      .get<Post[]>(this.API_URL, { params })
      .toPromise()
      .then(res => res as Post[])
      .catch(err => err);
  }

  setParams(filter: string) {
    return new HttpParams().set('filter', filter);
  }

  getSinglePost(id): Promise<any> {
    return this.http
      .get(`${this.API_URL}/${id}`)
      .toPromise()
      .then(res => res)
      .catch(err => err);
  }

  likePost() {}

  commentPost() {}
}
