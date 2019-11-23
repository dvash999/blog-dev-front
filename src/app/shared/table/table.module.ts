import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent} from './table.component';
import { RowComponent} from './row/row.component';


@NgModule({
  declarations: [TableComponent, RowComponent],
  exports: [
    TableComponent,
    RowComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TableModule { }
