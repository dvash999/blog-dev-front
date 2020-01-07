import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../../../../../../admin/manage-posts/models/Post.model';
import { Route, Router } from '@angular/router';
import { PostService } from '../../../api/post.service';
import {ResponseMessage} from '../../../../../../shared/models/responseMessage';

@Component({
  selector: 'app-post-preview-list',
  templateUrl: './post-preview-list.component.html',
  styleUrls: ['./post-preview-list.component.css']
})
export class PostPreviewListComponent implements OnInit {
  @Input() filter;
  posts: Post[];
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getAllPosts(this.filter).then((response: ResponseMessage) => {
      if (!response || response.message.length === 0) return;
      this.posts = response.message;
    });
  }
}
