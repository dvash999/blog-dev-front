import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPostsComponent } from '../components/containers/view-posts/view-posts.component';
import { ViewPostComponent } from '../components/presentational/view-post/view-post.component';
import { NewPostComponent } from '../components/containers/new-post/new-post.component';
import { EditPostComponent } from '../components/containers/edit-post/edit-post.component';

const postsRoutes: Routes = [
  { path: '', component: ViewPostsComponent },
  { path: 'view-post/:id', component: ViewPostComponent},
  { path: 'new-post', component: NewPostComponent },
  { path: 'edit-post/:id', component: EditPostComponent }
];
@NgModule({
  imports: [RouterModule.forChild(postsRoutes)],
  exports: [RouterModule]
})
export class ManagePostsRoutingModule { }
