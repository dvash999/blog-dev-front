import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { SearchService } from '../../../../shared/services/search/search.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showMenu: boolean;
  showContact: boolean;
  searchQuery: string;

  constructor(private searchService: SearchService, private router: Router) {}

  @HostListener('window:resize', ['$event']) onResize(event) {
    if (event.target.innerWidth > 880) {
      this.showMenu = true;
      this.showContact = false;
    }
    if (event.target.innerWidth < 880) {
      this.showMenu = false;
      this.showContact = true;
    }
  }

  ngOnInit() {
    this.showMenu = window.innerWidth > 880;
    this.showContact = window.innerWidth < 880;
  }

  toggleNav() {
    this.showMenu = !this.showMenu;
  }

  sendSearch(e) {
    e.preventDefault();
    this.searchService.searchPosts(this.searchQuery).then(posts => {
      this.router.navigate(['/search-results/', this.searchQuery], {
        state: { posts, query: this.searchQuery }
      });
      this.searchQuery = '';
    });
  }
}
