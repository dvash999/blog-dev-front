import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Post} from '../../post.model';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  constructor() { }

  @Output() postDeleted: EventEmitter<any>;
  @Input()  postID: number;

  ngOnInit() {
  }

  deletePost() {
    this.postDeleted.emit(this.postID);
  }

}
