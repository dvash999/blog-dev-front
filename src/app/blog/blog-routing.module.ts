import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SearchComponent } from './shared/components/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/home/modules/home.module').then(
            m => m.HomeModule
          )
      },
      {
        path: 'tech-news',
        loadChildren: () =>
          import('./components/tech-news/modules/tech-news.module').then(
            m => m.TechNewsModule
          )
      },
      {
        path: 'deep-dive',
        loadChildren: () =>
          import(
            './components/deep-dive/modules/deep-dive/deep-dive.module'
          ).then(m => m.DeepDiveModule)
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./components/contact/modules/contact.module').then(
            m => m.ContactModule
          )
      },
      {
        path: 'search/:query',
        component: SearchComponent
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
