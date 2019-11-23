import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  @Input() public columnTitles;
  @Input() public items;
  @Output() deleteUser = new EventEmitter<any>();


  ngOnInit() {
  }

  delete(id) {
    this.deleteUser.emit(id);
  }

}
