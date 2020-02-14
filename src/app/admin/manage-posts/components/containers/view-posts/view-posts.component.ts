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

  columnTitles = ['ID', 'Title', 'Content', 'Likes', 'Date'];

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
    this.sub = this.managePostsService
      .getAllPosts()
      .subscribe(posts => (this.posts = posts));
  }

  async deletePost(id) {
    await ViewPostsComponent.approveAction();

    this.managePostService.deletePost(id).then(res => {
      console.log(res)
      if (res.message === 'success') {
        this.posts = res.payload;
      }
    });
  }

  showPost(post: Post): void {
    this.canShowPost = true;
    this.canShowPostList = false;
    this.router.navigate(['admin/posts/view-post/' + post.id], {
      state: { post }
    });
  }

  showPostList(): void {
    this.canShowPostList = true;
    this.canShowPost = false;
  }

  editPost(id) {
    this.router.navigateByUrl('/admin/posts/edit-post/' + id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
