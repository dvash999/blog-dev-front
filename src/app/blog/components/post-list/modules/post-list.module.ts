import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const blogRoutes: Routes = [
  // { path: '', component: PostslistComponent }
]

@NgModule({
  declarations: [],
  exports: [
  ],
  imports: [
    RouterModule.forChild(blogRoutes),
    CommonModule,
  ],
})
export class PostListModule { }
