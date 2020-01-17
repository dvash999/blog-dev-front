import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikesComponent } from '../likes.component';

@NgModule({
  declarations: [LikesComponent],
  imports: [CommonModule],
  exports: [LikesComponent]
})
export class LikesModule {}
