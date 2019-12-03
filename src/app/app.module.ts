import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { BlogModule } from './blog/blog.module';

import { NotificationsService } from './blog/features/notifications/notifications.service';

import { AppComponent } from './app.component';
import { Navbar } from './blog/shared/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, Navbar],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BlogModule,
    AdminModule,
  ],
  providers: [NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
