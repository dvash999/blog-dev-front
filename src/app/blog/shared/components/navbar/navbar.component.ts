import {Component, OnInit} from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  showMenu: boolean;
  showContact: boolean;


  constructor() {
  }

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
}
