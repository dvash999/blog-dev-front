import { Component, OnDestroy, OnInit } from '@angular/core';
import { ManageUsersService } from '../manage-users/api/manage-users.service';
import { ManagePostsService } from '../manage-posts/api/manage-posts.service';
import { Post } from '../manage-posts/models/Post.model';
import { User } from '../manage-users/models/User.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  users: User[] = [];
  posts: Post[] = [];

  private sub: Subscription;

  constructor(
    private manageUsers: ManageUsersService,
    private managePosts: ManagePostsService
  ) {}

  ngOnInit() {
    this.manageUsers.getAllusers().then(users => (this.users = users));
    this.sub = this.managePosts.getAllPosts().subscribe(posts => (this.posts = posts));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
