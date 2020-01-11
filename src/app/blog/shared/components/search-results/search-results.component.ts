import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Post } from '../../../../admin/manage-posts/models/Post.model';
import { isEmpty } from 'lodash';
import { Observable, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  posts: Post[];
  query: string;

  constructor(private router: Router) {
    try {
      const { posts, query } = this.router.getCurrentNavigation().extras.state;
      this.posts = posts;
      this.query = query;
    } catch (error) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe((e: NavigationStart) => {
        const {query, posts} = this.router.getCurrentNavigation().extras.state;
        this.posts = posts;
        this.query = query;
      });

  }
}
