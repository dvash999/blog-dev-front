import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class Navbar {
  showMenu: boolean;

  @HostListener('window:resize', ['$event']) onResize(event) {
    if (event.target.innerWidth > 880) this.showMenu = true;
    if (event.target.innerWidth < 880) this.showMenu = false;
  }

  toggleNav() {
    this.showMenu = !this.showMenu;
  }
}
