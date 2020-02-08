import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPostsComponent } from '../components/containers/view-posts/view-posts.component';
import { ViewPostComponent } from '../components/presentational/view-post/view-post.component';
import { NewPostComponent } from '../components/containers/new-post/new-post.component';
import { EditPostComponent } from '../components/containers/edit-post/edit-post.component';
import { PostResolverService } from '../../../blog/components/posts/resolvers/post-resolver.service';

const postsRoutes: Routes = [
  {
    path: '',
    component: ViewPostsComponent,
    pathMatch: 'full'
  },
  {
    path: 'view-post/:id',
    component: ViewPostComponent,
    resolve: { post: PostResolverService },
    runGuardsAndResolvers: 'always'
  },
  { path: 'new-post', component: NewPostComponent },
  {
    path: 'edit-post/:id',
    component: EditPostComponent,
    resolve: { post: PostResolverService },
    runGuardsAndResolvers: 'always'
  }
];
@NgModule({
  imports: [RouterModule.forChild(postsRoutes)],
  exports: [RouterModule]
})
export class ManagePostsRoutingModule {}
