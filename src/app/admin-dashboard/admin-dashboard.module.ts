import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ManagePostsModule} from './manage-posts/manage-posts.module';
import { AdminDashboardComponent } from './admin-dashboard.component';

const adminRoutes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'manage-posts', loadChildren: () =>  ManagePostsModule}
];

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    RouterModule.forChild(adminRoutes),
    CommonModule,
  ]
})
export class AdminDashboardModule { }
