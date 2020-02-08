import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { Post } from '../../../models/Post.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit, OnDestroy {
  @Output() toPostList = new EventEmitter<boolean>();
  post: Post;

  constructor(private activatedRoute: ActivatedRoute, private route: Router) {}

  ngOnInit() {
    this.post = this.activatedRoute.snapshot.data.post;
  }

  editPost(post) {
    this.route.navigateByUrl('admin/posts/edit-post/' + post.id, {
      state: { post }
    });
  }

  ngOnDestroy() {}
}
