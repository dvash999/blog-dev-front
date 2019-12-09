import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../../../admin/manage-posts/models/Post.model';
import { Route, Router } from '@angular/router';
import { PostService } from '../../../api/post.service';

// TODO - change name to post-preview-list
@Component({
  selector: 'app-post-preview-list',
  templateUrl: './post-preview-list.component.html',
  styleUrls: ['./post-preview-list.component.css']
})
export class PostPreviewListComponent implements OnInit {
  posts: Post[];
  constructor(private route: Router, private postService: PostService) {}

  ngOnInit() {
    this.postService.getAllPosts().then(posts => (this.posts = posts));
  }

  continueReading(post) {
    this.route.navigate([`/posts/${post.id}`, post ]);
  }
}
