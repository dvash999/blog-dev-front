import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagePostsRoutingModule } from './manage-posts-routing.module';
import { ViewPostsComponent } from '../components/containers/view-posts/view-posts.component';
import { ViewPostComponent } from '../components/presentational/view-post/view-post.component';
import { NewPostComponent } from '../components/containers/new-post/new-post.component';
import { EditPostComponent } from '../components/containers/edit-post/edit-post.component';
import { PostCardComponent } from '../components/presentational/post-card/post-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { PostFormComponent } from '../components/containers/post-form/post-form.component';
import { AdminSharedModule } from '../../admin-shared/admin-shared.module';
import {TableModule} from '../../../shared/table/table.module';

@NgModule({
  declarations: [
    ViewPostsComponent,
    PostCardComponent,
    ViewPostComponent,
    NewPostComponent,
    EditPostComponent,
    PostFormComponent
  ],
  imports: [
    ManagePostsRoutingModule,
    CommonModule,
    AdminSharedModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    TableModule
  ],
  providers: []
})
export class ManagePostsModule { }
