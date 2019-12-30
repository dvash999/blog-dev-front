import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsModule } from '../../posts/modules/posts.module';
import { TechNewsComponent } from '../components/tech-news/tech-news.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TechNewsComponent},
  // { path: 'posts', loadChildren: () => PostsModule }

];

@NgModule({
  declarations: [TechNewsComponent],
  imports: [RouterModule.forChild(routes), CommonModule, PostsModule],
  exports: [RouterModule]
})
export class TechNewsModule {}
