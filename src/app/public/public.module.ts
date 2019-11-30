import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import {LayoutModule} from './layout/layout.module';

import {HomeComponent} from './home/home.component';
import {PostslistComponent} from './postslist/postslist.component';

@NgModule({
  declarations: [HomeComponent, PostslistComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    LayoutModule
  ]
})
export class PublicModule { }
