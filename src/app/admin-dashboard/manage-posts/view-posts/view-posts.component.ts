import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ManagePostsService } from '../../../api/http/admin/manage-posts.service';
import { Post } from '../post.model';


@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {
  postList$: Observable<Post[]>;

  constructor(private router: Router, private managePostsService: ManagePostsService) { }

  ngOnInit() {
  this.postList$ = this.managePostsService.getAllPosts();
  }


}
