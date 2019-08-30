import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../../models/post.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() post: Post;
  @Output() showPost = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {

  }

  openPost() {
    this.showPost.emit(this.post);
  }

}
