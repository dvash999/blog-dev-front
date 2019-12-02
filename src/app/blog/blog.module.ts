import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { HomeModule } from './components/home/modules/home.module';
import {HomeComponent} from './components/home/components/container/home/home.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [],
  imports: [CommonModule, BlogRoutingModule, HomeModule]
})
export class BlogModule {}
