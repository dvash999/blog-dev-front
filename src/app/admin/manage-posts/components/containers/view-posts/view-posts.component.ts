import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ManagePostsService } from '../../../api/manage-posts.service';
import { Post } from '../../../models/Post.model';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {
  postList$: Observable<Post[]>;
  canShowPost = false;
  canShowPostList = true;
  chosenPost: Post;

  constructor(private router: Router, private managePostsService: ManagePostsService,
              private managePostService: ManagePostsService) { }

  ngOnInit() {
    this.postList$ = this.managePostsService.getAllPosts();
  }

  deletePost(postID): void {
    this.managePostService.deletePost(postID).then(message => console.log(message));
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
