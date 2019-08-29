import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ManagePostsService } from '../../../api/http/admin/manage-posts.service';
import { Post } from '../post.model';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {
  postList$: Observable<Post[]>;

  constructor(private router: Router, private managePostsService: ManagePostsService, private managePostService: ManagePostsService) { }

  ngOnInit() {
  this.postList$ = this.managePostsService.getAllPosts();
  const vals$ = this.managePostsService.getAllPosts()
    .pipe(
      map(res => Object.values(res))
    );

  // vals$.subscribe(val => console.log(val.filter(
  //   post => post.author === 'Dror')));
  }

  deletePost(postID) {
    this.managePostService.deletePost(postID).then(message => console.log(message));

  }


}
