import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule} from '@angular/material';
import { LogoutComponent } from './logout/logout.component';
import { SideMenuModule } from './side-menu/side-menu.module';

@NgModule({
  declarations: [
  ],
  imports: [
    // CommonModule,
    // RouterModule,
    // HttpClientModule,
    // MatInputModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatProgressSpinnerModule,
    // SideMenuModule
  ],
  exports: [
    // SideMenuComponent,
    // LogoutComponent
  ]
})
export class AdminSharedModule { }
