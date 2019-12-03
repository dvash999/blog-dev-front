import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Route, Router} from '@angular/router';
import {Post} from '../../../../../../admin/manage-posts/models/Post.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy{

  post: Post[];
  sub: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
   console.log(this.router.getCurrentNavigation().extras.state)
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(post => console.log(post))
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
