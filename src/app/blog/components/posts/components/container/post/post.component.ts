import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../../../../admin/manage-posts/models/Post.model';
import { LikeService } from '../../../../../features/likes/api/like.service';
import { NotificationsService } from '../../../../../features/notifications/notifications.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private likeService: LikeService,
  ) {}

  ngOnInit(): void {
    this.post = this.activatedRoute.snapshot.data.post.payload;
  }

  likePost() {
    this.likeService.like(this.post.id, 'post').then(response => {
      if (response.message === 'success') this.post.likes++;
    });
  }
}
