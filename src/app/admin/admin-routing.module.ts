import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagePostsModule } from './manage-posts/modules/manage-posts.module';

const adminRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'manage-posts', loadChildren: () =>  ManagePostsModule}
];
@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
