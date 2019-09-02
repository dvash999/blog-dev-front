import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Post} from '../../../models/post.model';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  constructor() { }

  @Output() postDeleted = new EventEmitter<number>();
  @Output() toPostList = new EventEmitter<boolean>();
  @Input()  post: Post;

  ngOnInit() {
  }

  deletePost() {
    this.postDeleted.emit(this.post.id);
  }

  backToPostList() {
    this.toPostList.emit();
  }

}
