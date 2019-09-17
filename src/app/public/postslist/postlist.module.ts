import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {PostModule} from './post/module/post.module';
import {PostslistComponent} from './postslist.component';

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
    PostModule
  ],
})
export class PostlistModule { }
