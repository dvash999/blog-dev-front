import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { NotificationsService } from './blog/features/notifications/notifications.service';
import { PostListComponent } from './blog/components/post-list/components/container/post-list/post-list.component';
import { PostComponent } from './blog/components/post-list/components/presentational/post/post.component';

@NgModule({
  declarations: [AppComponent, PostListComponent, PostComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule
  ],
  providers: [NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
