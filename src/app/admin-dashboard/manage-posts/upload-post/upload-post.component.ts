import { Component, OnInit } from '@angular/core';
import { ManagePostsService } from '../../../api/http/admin/manage-posts.service';
import {Observable} from 'rxjs';
import {ResponseMessage} from '../../../api/http/modles/responseMessage';

@Component({
  selector: 'app-upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.css']
})
export class UploadPostComponent implements OnInit {
  // answer: Observable<ResponseMessage>;
  constructor(private managePostsService: ManagePostsService) { }

  ngOnInit() {
  }

  uploadPost(post) {
    this.managePostsService.uploadPost(post).subscribe((response: ResponseMessage) => {
      console.log(response.message);
    });
  }
}
