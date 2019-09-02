import { Component, OnInit } from '@angular/core';
import { ManagePostsApiService } from '../../../api/manage-posts-api.service';
import { ResponseMessage } from '../../../../../api/http/modles/responseMessage';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  constructor(private managePostsService: ManagePostsApiService) { }

  ngOnInit() {
  }

  uploadPost(post) {
    this.managePostsService.uploadPost(post).subscribe((response: ResponseMessage) => {
      console.log(response.message);
    });
  }
}
