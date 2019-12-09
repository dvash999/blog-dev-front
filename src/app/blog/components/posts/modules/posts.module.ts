import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../components/container/post/post.component';
import { PostPreviewComponent } from '../components/presentational/post-preview/post-preview.component';
import { PostPreviewListComponent } from '../components/container/post-preview-list/post-preview-list.component';

const routes: Route[] = [
  {
    path: ':id',
    component: PostComponent
  }
];

@NgModule({
  declarations: [PostComponent, PostPreviewComponent, PostPreviewListComponent],
  exports: [PostComponent, PostPreviewComponent, PostPreviewListComponent],
  imports: [RouterModule.forChild(routes), CommonModule]
})
export class PostsModule {}
