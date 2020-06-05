import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../manage-posts/models/Post.model';
import { User } from '../manage-users/models/User.model';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  users: User[] = [];
  verifiedUsers = 0;

  posts: Post[] = [];
  tasks: Task[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.posts = this.route.snapshot.data.posts;
    this.users = this.route.snapshot.data.users;
    this.tasks = this.route.snapshot.data.tasks;
  }

  ngOnDestroy(): void {}
}
