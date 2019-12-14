import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './components/home/modules/home.module';
import { PostsModule } from './components/posts/modules/posts.module';
import { BlogComponent } from './blog.component';
import { ContactModule } from './components/contact/modules/contact.module';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    component: BlogComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => HomeModule
      },
      {
        path: 'posts',
        loadChildren: () => PostsModule
      },
      {
        path: 'contact',
        loadChildren: () => ContactModule
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [NotFoundComponent],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
