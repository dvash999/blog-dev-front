import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PostResolverService } from '../resolvers/post-resolver.service';

import { PostComponent } from '../components/container/post/post.component';
import { PostPreviewComponent } from '../components/presentational/post-preview/post-preview.component';
import { PostPreviewListComponent } from '../components/container/post-preview-list/post-preview-list.component';
import { LikesModule } from '../../../features/likes/module/likes.module';
import { SharedModule } from '../../../../shared/shared.module';

const routes: Routes = [
  {
    path: 'read/:id',
    component: PostComponent,
    resolve: { post: PostResolverService }
  }
];

@NgModule({
  declarations: [PostComponent, PostPreviewComponent, PostPreviewListComponent, ],
  imports: [RouterModule.forChild(routes), CommonModule, LikesModule, SharedModule],
  providers: [PostResolverService],
  exports: [PostComponent, PostPreviewComponent, PostPreviewListComponent]
})
export class PostsModule {}
