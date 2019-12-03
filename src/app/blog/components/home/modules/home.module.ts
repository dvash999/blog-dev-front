import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { PostPreviewComponent } from '../../posts/components/container/post-preview/post-preview.component';
import { HomeComponent } from '../components/container/home/home.component';

const homeRoutes: Route[] = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, PostPreviewComponent],
  imports: [RouterModule.forChild(homeRoutes), CommonModule]
})
export class HomeModule {}
