import {Component, ContentChild, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {Post} from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // @Input() post: Post;
  @Output() likePost = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  likeThisPost() {
    // this.likePost.emit(this.post.id);
  }

}
