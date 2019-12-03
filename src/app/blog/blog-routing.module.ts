import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './components/home/modules/home.module';
import {PostsModule} from './components/posts/modules/posts.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomeModule
  },
  {
    path: 'posts',
    loadChildren: () => PostsModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
