import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NotifierModule } from 'angular-notifier';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { HttpInterceptorService } from './shared/services/http/http-interceptor.service';
import { AppComponent } from './app.component';
import {customNotifierOptions} from './shared/notificationStyle';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './shared/services/loader.service';


@NgModule({
  declarations: [AppComponent, LoaderComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    LoaderService
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NotifierModule.withConfig(customNotifierOptions),
    MatProgressBarModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
