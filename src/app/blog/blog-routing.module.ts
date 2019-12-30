import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './components/home/modules/home.module';
import { BlogComponent } from './blog.component';
import { ContactModule } from './components/contact/modules/contact.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { TechNewsModule } from './components/tech-news/modules/tech-news.module';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: '',
        loadChildren: () => HomeModule,
      },
      {
        path: 'tech-news',
        loadChildren: () => TechNewsModule
      },
      // {
      //   path: 'contact',
      //   loadChildren: () => ContactModule
      // },
      {
        path: '**',
        component: NotFoundComponent
      }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [NotFoundComponent],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
