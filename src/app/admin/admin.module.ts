import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ManagePostsModule } from './manage-posts/modules/manage-posts.module';
import { AdminSharedModule } from './admin-shared/admin-shared.module';
import {ManageUsersModule} from './manage-users/module/manage-users.module';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {TableComponent} from '../shared/table/table.component';
import {TableModule} from '../shared/table/table.module';


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
    TableModule
  ],
  exports: [RouterModule, AdminComponent, DashboardComponent, AdminSharedModule, TableModule]
})
export class AdminModule {}
