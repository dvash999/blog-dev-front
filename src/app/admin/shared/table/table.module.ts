import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent} from './table.component';
import { RowComponent} from './row/row.component';
import { Truncate3Dots } from '../../../blog/components/posts/pipes/Truncate3Dots.pipe';
import { PostsModule } from '../../../blog/components/posts/modules/posts.module';


@NgModule({
  declarations: [TableComponent, RowComponent],
  exports: [
    TableComponent,
    RowComponent
  ],
  imports: [
    CommonModule,
    PostsModule
  ],
  providers: [Truncate3Dots]
})
export class TableModule { }
