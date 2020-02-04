import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../../models/Post.model';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent {
  @Output() postDeleted = new EventEmitter<number>();
  @Output() toPostList = new EventEmitter<boolean>();
  // @Input() post: Post;

  // TODO - delete shouldnt be here, only on the parent of the view post
  deletePost() {
    // this.postDeleted.emit(this.post.id);
  }

  backToPostList() {
    this.toPostList.emit();
  }
}
