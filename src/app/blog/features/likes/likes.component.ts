import { Component, Input, OnInit } from '@angular/core';
import { PusherService } from '../../shared/pusher/pusher.service';
import { LikeService } from './api/like.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  @Input() type: string;
  @Input() id: number;

  likes: number;
  constructor(private likeService: LikeService) {}

  ngOnInit() {
    this.likeService.getLikesByID(this.type, this.id).subscribe(likes => this.likes = likes);
  }

  // need to add if user liked the post -> disable like for the post
  like(type, id) {
    this.likeService.like(type, id).then(response => {
      if (response.message === 'success') this.likes++;
    });
  }
}
