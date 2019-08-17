import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewPostsComponent} from './view-posts/view-posts.component';
import {ViewPostComponent} from './view-posts/view-post/view-post.component';
import {UploadPostComponent} from './upload-post/upload-post.component';
import {EditPostComponent} from './edit-post/edit-post.component';

const postsRoutes: Routes = [
  { path: '', component: ViewPostsComponent },
  { path: 'view-post/:id', component: ViewPostComponent},
  { path: 'upload-post', component: UploadPostComponent },
  { path: 'edit-post/:id', component: EditPostComponent }
];
@NgModule({
  imports: [RouterModule.forChild(postsRoutes)],
  exports: [RouterModule]
})
export class ManagePostsRoutingModule { }
