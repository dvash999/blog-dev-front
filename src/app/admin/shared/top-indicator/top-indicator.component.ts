import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-indicator',
  templateUrl: './top-indicator.component.html',
  styleUrls: ['./top-indicator.component.css']
})
export class TopIndicatorComponent implements OnInit {
  @Input() page: string;
  constructor() { }

  ngOnInit() {
  }

}
