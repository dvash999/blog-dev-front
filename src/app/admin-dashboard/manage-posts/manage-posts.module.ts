import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagePostsRoutingModule } from './manage-posts-routing.module';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { ViewPostComponent } from './view-posts/view-post/view-post.component';
import { UploadPostComponent } from './upload-post/upload-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostCardComponent } from './view-posts/post-card/post-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  declarations: [
    ViewPostsComponent,
    PostCardComponent,
    ViewPostComponent,
    UploadPostComponent,
    EditPostComponent,
    PostFormComponent,
  ],
  imports: [
    ManagePostsRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  providers: []
})
export class ManagePostsModule { }
