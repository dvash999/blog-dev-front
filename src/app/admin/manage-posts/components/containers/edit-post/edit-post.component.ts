import { Component, InjectionToken, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Post } from '../../../models/Post.model';
import { ManagePostsService } from '../../../api/manage-posts.service';
import { ResponseMessage } from '../../../../../shared/models/responseMessage';
import { createInjectionToken } from '@angular/compiler/src/core';
import { map, tap } from 'rxjs/operators';

export const postServiceToken = new InjectionToken<ManagePostsService>(
  'postServiceToken'
);

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {
  post: Post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private managePostsService: ManagePostsService,
    private route: Router
  ) {}

  ngOnInit() {
    this.post = this.activatedRoute.snapshot.data.post;
  }

  uploadEditedPost(post): void {
    post.id = this.post.id;
    this.managePostsService.updatePost(post).then(res => {
      if (res.message === 'success') {
        this.route.navigateByUrl('admin/posts');
        // add notification success
      }
    });
  }

  ngOnDestroy(): void {}
}
