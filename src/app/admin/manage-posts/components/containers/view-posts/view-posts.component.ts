import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ManagePostsService } from '../../../api/manage-posts.service';
import { Post } from '../../../models/Post.model';
import {NotificationsService} from '../../../../../shared/notifications/notifications.service';


@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {
  // postList$: Observable<Post[]>;
  posts: Post[];

  canShowPost = false;
  canShowPostList = true;
  chosenPost: Post;

  columnTitles = ['ID',  'Subject', 'Title', 'Dates', 'Likes', 'Comments'];

  constructor(private router: Router, private managePostsService: ManagePostsService,
              private managePostService: ManagePostsService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.managePostsService.getAllPosts().subscribe(posts => this.posts = posts);
  }

  approveAction() {
    NotificationsService.warning().then(response => {
      if (response.dismiss) return;
    });
  }


  deletePost(id) {
    this.approveAction();

    this.managePostService.deletePost(id).then(response => {
      if (!response) return;
      this.posts = this.posts.filter(post => post.id !== id);
    });
    }


  showPost(post): void {
    this.canShowPost = true;
    this.canShowPostList = false;
    this.chosenPost = post;
  }

  showPostList(): void {
    this.canShowPostList = true;
    this.canShowPost = false;
  }

  editPost() {

  }


}
