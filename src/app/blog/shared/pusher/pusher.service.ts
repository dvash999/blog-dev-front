import { Injectable } from '@angular/core';
declare const Pusher: any;
import { environment } from './enviroment';
import { HttpClient } from '@angular/common/http';
import { ROOT_URL } from '../../api/models/api-helper';
import Echo from 'laravel-echo';

@Injectable()
export class PusherService {
  socket: any;
  channel: any;
  MANAGE_POSTS_URL = `${ROOT_URL}/like`;

  constructor(private http: HttpClient) {
    // this.socket = require('socket.io-client');


    // this.pusher = new Pusher(environment.pusher.key, {
    //   cluster: environment.pusher.cluster,
    //   encrypted: true
    // });
    // this.channel = this.pusher.subscribe('events-channel');
  }

  like(numLikes) {
    // this.http
    //   .post(`${this.MANAGE_POSTS_URL}`, { likes: numLikes })
    //   .subscribe(data => {});
  }
}
