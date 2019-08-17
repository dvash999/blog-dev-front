import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import {BlogModule} from './blog/blog.module';

const appRoutes: Routes = [
  {path: '', loadChildren: () => BlogModule },
  {path: 'admin', loadChildren: () =>  AdminDashboardModule},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],

  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
