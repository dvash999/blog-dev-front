import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from '@angular/router';
import { DeepDiveComponent } from '../../components/deep-dive/deep-dive.component';
import { PostsModule } from '../../../posts/modules/posts.module';

const routes: Routes = [
  { path: '', component: DeepDiveComponent },
  { path: 'posts', loadChildren: () => PostsModule }
];

@NgModule({
  declarations: [DeepDiveComponent],
  imports: [RouterModule.forChild(routes), CommonModule, PostsModule],
  exports: [RouterModule]
})
export class DeepDiveModule {}
