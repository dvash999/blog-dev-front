import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ManagePostsModule } from './manage-posts/modules/manage-posts.module';
import { AdminSharedModule } from './admin-shared/admin-shared.module';
import { ManageUsersModule } from './manage-users/module/manage-users.module';
import { TableModule } from './shared/table/table.module';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'posts', loadChildren: () => ManagePostsModule },
      { path: 'users', loadChildren: () => ManageUsersModule },
    ]
  }
];

@NgModule({
  declarations: [AdminComponent, DashboardComponent],
  imports: [
    RouterModule.forChild(adminRoutes),
    AdminSharedModule,
    CommonModule,
    TableModule
  ],
  providers: [],
  exports: [
    RouterModule,
    AdminComponent,
    DashboardComponent,
    AdminSharedModule,
    TableModule
  ]
})
export class AdminModule {}
