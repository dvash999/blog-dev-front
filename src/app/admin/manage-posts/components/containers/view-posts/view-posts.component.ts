import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ManagePostsService } from '../../../api/manage-posts.service';
import { NotificationsService } from '../../../../../blog/features/notifications/notifications.service';
import { Post } from '../../../models/Post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  sub: Subscription;

  canShowPost = false;
  canShowPostList = true;
  chosenPost: Post;

  columnTitles = [
    'ID',
    'Title',
    'Content',
    'Likes',
    'Comments',
    'Date',
  ];

  static ObjToArrayPipe(posts) {
    return posts.map(({ id, title, content, likes, comments, date, img }) => [
      id,
      title,
      content,
      likes,
      comments,
      date,
      img
    ]);
  }

  static approveAction() {
    return NotificationsService.warning().then(response => {
      if (response.dismiss) return;
    });
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
    this.sub = this.managePostsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);
      // this.posts = ViewPostsComponent.ObjToArrayPipe(posts);
      // console.log('this.post', this.posts)
    });
  }

  async deletePost(id) {
    await ViewPostsComponent.approveAction();

    this.managePostService.deletePost(id).then(res => {
      if (!res.message) return;

      this.posts = ViewPostsComponent.ObjToArrayPipe(res.message);
    });
  }

  showPost(post): void {
    this.canShowPost = true;
    this.canShowPostList = false;
    this.chosenPost = post;
    // console.log('post', post)
    this.router.navigate(['/admin/view-post/' + post.id]);
    // go to form with the fetched post
  }

  showPostList(): void {
    this.canShowPostList = true;
    this.canShowPost = false;
  }

  editPost() {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
