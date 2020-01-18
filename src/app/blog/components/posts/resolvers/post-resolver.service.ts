import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Post } from '../../../../admin/manage-posts/models/Post.model';
import { PostService } from '../api/post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<Post> {
  constructor(private router: Router, private postService: PostService) {}

  resolve(routeSnapshot: ActivatedRouteSnapshot): Promise<Post> {
    const id: number = routeSnapshot.params.id;
    return this.postService
      .getSinglePost(id)
      .then(res => {
        if (res.error) {
          return this.router.navigateByUrl('/404');
        }
        return res;
      })
      .catch(err => err);
  }
}
