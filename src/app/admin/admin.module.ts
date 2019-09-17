import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagePostsModule } from './manage-posts/modules/manage-posts.module';
import { AdminSharedModule } from './admin-shared/admin-shared.module';
import {ManageUsersModule} from './users/module/manage-users.module';

const adminRoutes: Routes = [
  { path: '', component: AdminComponent, children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'manage-posts', loadChildren: () => ManagePostsModule },
      { path: 'manage-users', loadChildren: () => ManageUsersModule }
    ]},

];

@NgModule({
  declarations: [AdminComponent, DashboardComponent],
  imports: [
    RouterModule.forChild(adminRoutes),
    AdminSharedModule,
    CommonModule,
  ],
  exports: [RouterModule, AdminComponent, DashboardComponent]
})
export class AdminModule {}