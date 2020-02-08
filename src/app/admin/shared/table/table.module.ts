import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent} from './table.component';
import { RowComponent} from './row/row.component';
import { PostsModule } from '../../../blog/components/posts/modules/posts.module';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [TableComponent, RowComponent],
  exports: [
    TableComponent,
    RowComponent
  ],
  imports: [
    CommonModule,
    PostsModule,
    SharedModule
  ],
  providers: []
})
export class TableModule { }
