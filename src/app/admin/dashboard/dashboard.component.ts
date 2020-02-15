import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../manage-posts/models/Post.model';
import { User } from '../manage-users/models/User.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  users: User[] = [];
  verifiedUsers = 0;

  posts: Post[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.posts = this.route.snapshot.data.posts;
    this.users = this.route.snapshot.data.users;
  }

  ngOnDestroy(): void {}
}
