import { Component, OnInit } from '@angular/core';
import { ManagePostsService } from '../../../api/manage-posts.service';
import { ResponseMessage } from '../../../../../api/http/modles/responseMessage';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  // submittedSuccess: boolean;
  constructor(private managePostsService: ManagePostsService) { }

  ngOnInit() {
  }

  uploadNewPost(post) {
    this.managePostsService.addPost(post).subscribe((response: ResponseMessage) => {
      // if (response.message === 'success') {
      //   this.submittedSuccess = true;
      // }
    });
  }
}
