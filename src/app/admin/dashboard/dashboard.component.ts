import { Component, OnInit } from '@angular/core';
import { ManageUsersService } from '../manage-users/api/manage-users.service';
import { User } from '../manage-users/models/User.model';
import { ManagePostsService } from '../manage-posts/api/manage-posts.service';
import { Post } from '../manage-posts/models/Post.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users = [];
  posts = [];

  constructor(
    private manageUsers: ManageUsersService,
    private managePosts: ManagePostsService
  ) {}

  ngOnInit() {
    this.manageUsers.getAllusers().subscribe(users => (this.users = users));
    this.managePosts.getAllPosts().then(posts => (this.posts = posts));
  }
}
