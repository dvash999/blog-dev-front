import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { LikesModule } from './features/likes/module/likes.module';

import { NotificationsService } from './features/notifications/notifications.service';

import { BlogComponent } from './blog.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FreeCoursesComponent } from './components/free-courses/components/free-courses/free-courses.component';
import { CourseComponent } from './components/free-courses/components/course/course.component';
import { CourseListComponent } from './components/free-courses/components/course-list/course-list.component';

@NgModule({
  declarations: [BlogComponent, NavbarComponent, FreeCoursesComponent, CourseComponent, CourseListComponent],
  imports: [CommonModule, BlogRoutingModule, LikesModule],
  providers: [NotificationsService]
})
export class BlogModule {}
