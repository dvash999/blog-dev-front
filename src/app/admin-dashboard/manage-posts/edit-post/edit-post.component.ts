import {Component, InjectionToken, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {Post} from '../post.model';
import {ManagePostsService} from '../../../api/http/admin/manage-posts.service';
import {ResponseMessage} from '../../../api/http/modles/responseMessage';
import {createInjectionToken} from '@angular/compiler/src/core';

export const postServiceToken = new InjectionToken<ManagePostsService>('postServiceToken');

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit, OnDestroy {

  title: string;
  author: string;
  content: string;
  postID: number;

  postToEdit: Subscription;

  constructor(private route: ActivatedRoute, private managePostsService: ManagePostsService) { }

  ngOnInit() {
    this.postToEdit = this.route.params.subscribe(postToEdit => {
      this.title = postToEdit.title;
      this.author = postToEdit.author;
      this.content = postToEdit.content;
      this.postID = postToEdit.id;
    });
  }

  uploadEditedPost(post: Post): void {
    post.id = this.postID;
    const response = this.managePostsService.updatePost(post).subscribe(answer => console.log(answer));
    console.log(response)
  }

  ngOnDestroy(): void {
    this.postToEdit.unsubscribe();
  }

}
