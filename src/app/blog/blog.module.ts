import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { LikesModule } from './features/likes/likes.module';

import { NotificationsService } from './features/notifications/notifications.service';

import { BlogComponent } from './blog.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

@NgModule({
  declarations: [BlogComponent, NavbarComponent, NotFoundComponent],
  imports: [CommonModule, BlogRoutingModule, LikesModule],
  providers: [NotificationsService],
  exports: []
})
export class BlogModule {}
