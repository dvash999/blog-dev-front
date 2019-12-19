import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../../../../admin/manage-posts/models/Post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.post = this.activatedRoute.snapshot.data.post.message;
  }
}
