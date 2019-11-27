import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  @Input() columnTitles;
  @Input() items;
  @Input() fields;
  // @Input()  set fields(val) {
  //   this._fields = val;
  // }
  // get fields() {
  //   return this._fields;
  // }
  @Output() deleteUser = new EventEmitter<any>();

// TODO - refactor the html ASAP
  ngOnInit() {
  console.log(this.items)
  }

  delete(id) {
    this.deleteUser.emit(id);
  }

}
