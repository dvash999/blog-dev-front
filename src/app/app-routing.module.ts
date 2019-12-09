import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { BlogModule } from './blog/blog.module';
import { NotFoundComponent } from './blog/shared/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', loadChildren: () => BlogModule },
  { path: 'admin', loadChildren: () => AdminModule },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],

  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
