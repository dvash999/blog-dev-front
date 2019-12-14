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
    return this.postService
      .getSinglePost(routeSnapshot.params.id)
      .then(res => {
        console.log(res)
        if (res.code === 404) this.router.navigate(['/404']);
        return res;
      })
      .catch(err => err);
  }
}
