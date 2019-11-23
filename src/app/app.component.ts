import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  onToggle(toggle) {
    // console.log(toggle)
  }

  headerToggle(message) {
    // console.log(message);
  }
}
