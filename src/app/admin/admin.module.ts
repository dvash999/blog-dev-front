import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ManagePostsModule } from './manage-posts/modules/manage-posts.module';
import { AdminSharedModule } from './admin-shared/admin-shared.module';
import { ManageUsersModule } from './manage-users/module/manage-users.module';
import { TableModule } from './shared/table/table.module';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginModule } from './login/login.module';
import { AuthGuardService } from '../guards/auth-guard.service';
import { LogoutComponent } from './admin-shared/logout/logout.component';
import { SideMenuModule } from './admin-shared/side-menu/side-menu.module';
import { UploadImageComponent } from './shared/upload-image/upload-image.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,

    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
      {
        path: 'posts',
        loadChildren: () => ManagePostsModule,
        canActivate: [AuthGuardService]
      },
      {
        path: 'users',
        loadChildren: () => ManageUsersModule,
        canActivate: [AuthGuardService]
      }
    ]
  },
  { path: 'login', loadChildren: () => LoginModule },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  declarations: [AdminComponent, DashboardComponent],
  providers: [AuthGuardService],
  imports: [
    RouterModule.forChild(adminRoutes),
    SideMenuModule,
    CommonModule,
    TableModule
  ]
})
export class AdminModule {}
