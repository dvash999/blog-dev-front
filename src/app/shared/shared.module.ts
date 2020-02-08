import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformImgPipe } from './pipes/transform-img.pipe';
import { Truncate3Dots } from './pipes/Truncate3Dots.pipe';



@NgModule({
  declarations: [TransformImgPipe, Truncate3Dots],
  imports: [
    CommonModule
  ],
  exports: [
    TransformImgPipe, Truncate3Dots
  ]
})
export class SharedModule { }
