import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Post } from '../../../../admin/manage-posts/models/Post.model';
import { filter } from 'rxjs/operators';

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
      .pipe(
        filter(
          e => e instanceof NavigationStart && this.verifyURL(e.url)
        )
      )
      .subscribe((e: NavigationStart) => {
        const {
          query,
          posts
        } = this.router.getCurrentNavigation().extras.state;
        this.posts = posts;
        this.query = query;
      });
  }

  verifyURL(url) {
    return (url.includes('/search-results/') && !!this.query);
  }
}
