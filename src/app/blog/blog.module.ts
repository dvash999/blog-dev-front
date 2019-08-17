import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import {LayoutModule} from './layout/layout.module';

import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    LayoutModule
  ]
})
export class BlogModule { }
