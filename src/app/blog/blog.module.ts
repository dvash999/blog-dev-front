import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { HomeModule } from './components/home/modules/home.module';
import { PostsModule } from './components/posts/modules/posts.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, BlogRoutingModule, HomeModule, PostsModule]
})
export class BlogModule {}
