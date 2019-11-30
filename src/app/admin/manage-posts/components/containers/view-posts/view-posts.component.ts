import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ManagePostsService } from '../../../api/manage-posts.service';
import { NotificationsService } from '../../../../../shared/notifications/notifications.service';
import { Post } from '../../../models/Post.model';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {
  posts;

  canShowPost = false;
  canShowPostList = true;
  chosenPost: Post;

  columnTitles = ['ID', 'Subject', 'Title', 'Likes', 'Comments', 'Dates', 'Manage'];

  static postObjToArrayPipe(posts) {
    return posts.map(({id, title, content, likes, comments}) => [id, title, content, likes, comments]);
  }

  constructor(
    private router: Router,
    private managePostsService: ManagePostsService,
    private managePostService: ManagePostsService
  ) {}

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.managePostsService
      .getAllPosts()
      .then(posts => {
        this.posts = ViewPostsComponent.postObjToArrayPipe(posts);
        });
      }

  deletePost(id) {
    this.approveAction();

    console.log('asd')
    // NotificationsService.warning().then(response => {
    //   if (response.dismiss) return;
    //
    //   this.managePostService.deletePost(id).then(res => {
    //     if (!res.message) return;
    //
    //     this.posts = ViewPostsComponent.postObjToArrayPipe(res.message);
    //   });
    // });
  }

  async approveAction() {
    await NotificationsService.warning()
      .then(response => {
        if (response.dismiss) return;
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

  editPost() {}
}

