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
  @Output() deleteItem = new EventEmitter<any>();


  ngOnInit() {
    console.log(this.items)
  }

  delete(id) {
    this.deleteItem.emit(id);
  }

}
