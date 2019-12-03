import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../components/presentational/post/post.component';

const routes: Route[] = [
  {
    path: ':id',
    component: PostComponent
  }
];

@NgModule({
  declarations: [PostComponent],
  exports: [PostComponent],
  imports: [RouterModule.forChild(routes), CommonModule]
})
export class PostsModule {}
