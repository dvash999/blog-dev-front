import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { BlogModule } from './blog/blog.module';

const appRoutes: Routes = [
  { path: 'admin', loadChildren: () => AdminModule },
  { path: '', loadChildren: () => BlogModule, pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],

  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
