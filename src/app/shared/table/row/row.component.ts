import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  constructor() { }

  @Input() columnTitles;
  @Input() public item;
  @Output() deleteUser = new EventEmitter<any>();

  ngOnInit() {
  }

  delete(id) {
    this.deleteUser.emit(id);
  }

}
