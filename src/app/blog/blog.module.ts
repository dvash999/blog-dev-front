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
import {SearchService} from '../shared/services/search/search.service';
import { SearchComponent } from './shared/components/search/search.component';

@NgModule({
  declarations: [BlogComponent, NavbarComponent, FreeCoursesComponent, CourseComponent, CourseListComponent, SearchComponent],
  imports: [CommonModule, BlogRoutingModule, LikesModule],
  providers: [NotificationsService, SearchService]
})
export class BlogModule {}
