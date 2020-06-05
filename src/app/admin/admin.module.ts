import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ManagePostsModule } from './manage-posts/modules/manage-posts.module';
import { ManageUsersModule } from './manage-users/module/manage-users.module';
import { TableModule } from './shared/table/table.module';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginModule } from './login/login.module';
import { AuthGuardService } from '../guards/auth-guard.service';
import { SideMenuModule } from './shared/side-menu/side-menu.module';
import { AdminSharedModule } from './shared/admin-shared.module';
import { PostsResolverService } from '../shared/services/postsResolver.service';
import { ManageUsersService } from './manage-users/api/manage-users.service';
import { ManagePostsService } from './manage-posts/api/manage-posts.service';
import { AbstractResolver } from 'codelyzer/angular/urlResolvers/abstractResolver';
import { UsersResolverService } from '../shared/services/usersResolver.service';
import { TasksComponent } from './tasks/tasks.component';
import { TasksModule } from './tasks/tasks.module';
import { TasksResolver } from './services/tasks/tasksResolver.service';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService],
        resolve: { posts: PostsResolverService,  users: UsersResolverService ,
        tasks: TasksResolver},
      },
      {
        path: 'posts',
        loadChildren: () => ManagePostsModule,
        canActivate: [AuthGuardService]
      },
      {
        path: 'users',
        loadChildren: () => ManageUsersModule,
        canActivate: [AuthGuardService]
      },
      { path: 'tasks',
      loadChildren: () => TasksModule,
      canActivate: [AuthGuardService]
      }
    ]
  },
  { path: 'login', loadChildren: () => LoginModule },

  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  declarations: [AdminComponent, DashboardComponent],
  providers: [
  ],
  imports: [
    RouterModule.forChild(adminRoutes),
    SideMenuModule,
    CommonModule,
    TableModule,
    AdminSharedModule
  ]
})
export class AdminModule {}
