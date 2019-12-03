import { Component, OnInit } from '@angular/core';
import { ManagePostsService } from '../../../api/manage-posts.service';
import { ResponseMessage } from '../../../../../blog/api/models/responseMessage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  CharAmountInPost: number;

  constructor(
    private managePostsService: ManagePostsService,
    private router: Router
  ) {}

  ngOnInit() {}

  uploadNewPost(post) {
    this.managePostsService.addPost(post).then((response: ResponseMessage) => {
      if (response.message !== 'success') return 'add post failed';

      this.router.navigate(['/post-preview']);
    });
  }

  lineCounter(post) {
    this.CharAmountInPost = post.length;
  }
}
