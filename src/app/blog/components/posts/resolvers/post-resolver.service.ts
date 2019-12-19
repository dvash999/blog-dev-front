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
    console.log('log');
    return this.postService
      .getSinglePost(id)
      .then(res => {
        console.log(res)
        if (res.error) return this.router.navigate(['/']);
        return res;
      })
      .catch(err => err);
  }
}
