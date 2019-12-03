import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Post } from '../../../../admin/manage-posts/models/Post.model';
import { ROOT_URL } from '../../../api/models/api-helper';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostPreviewResolverService implements Resolve<Post[]> {
  API_URL = `${ROOT_URL}/posts`;

  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot) {
    return this.http
      .get<Post[]>(this.API_URL)
      .toPromise()
      .then(res => res as Post[])
      .catch(err => err);
  }
}
