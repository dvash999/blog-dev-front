import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Post } from '../../admin/manage-posts/models/Post.model';
import { ManagePostsService } from '../../admin/manage-posts/api/manage-posts.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostsResolverService implements Resolve<Observable<Post[]>> {

  constructor(private managePosts: ManagePostsService) {}

  resolve(): Observable<Post[]> {
    return this.managePosts.getAllPosts();
  }
}
