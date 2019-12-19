import { Component, OnInit } from '@angular/core';
import { PusherService } from '../../shared/pusher/pusher.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  likes: any;
  constructor(private pusherService: PusherService) {}

  ngOnInit() {
    this.pusherService.channel.bind('new-likes', data => {
      this.likes = data.likes;
    });
  }

  liked() {
    this.likes = parseInt(this.likes, 10) + 1;
    this.pusherService.like(this.likes);
  }
}
