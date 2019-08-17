import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../../post.model';
import {ActivatedRoute, Params, Route} from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  post: Post;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Post)  => {
      this.post = params;
    });
  }

}
