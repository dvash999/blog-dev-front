import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PusherService } from '../../shared/pusher/pusher.service';
import { LikeService } from './api/like.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  @Output() addLike = new EventEmitter();
  @Input() likeAmount: number;
  @Input() postId: number;

  likes: number;
  constructor() {}

  ngOnInit() {
  }


  like() {
    this.addLike.emit();
  }
}
