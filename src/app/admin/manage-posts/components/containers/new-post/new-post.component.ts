import { Component, OnInit } from '@angular/core';
import { ManagePostsService } from '../../../api/manage-posts.service';
import { ResponseMessage } from '../../../../../api/http/modles/responseMessage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(
    private managePostsService: ManagePostsService,
    private router: Router
  ) {}

  ngOnInit() {}

  uploadNewPost(post) {
    this.managePostsService.addPost(post).then((response: ResponseMessage) => {
      if (response.message !== 'success') return 'add post failed';

      this.router.navigate(['/posts']);
    });
  }
}
