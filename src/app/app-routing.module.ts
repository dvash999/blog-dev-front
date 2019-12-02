import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { BlogModule } from './blog/blog.module';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', loadChildren: () => BlogModule },
      { path: 'admin', loadChildren: () => AdminModule }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],

  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
