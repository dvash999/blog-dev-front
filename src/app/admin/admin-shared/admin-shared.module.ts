import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule} from '@angular/material';

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    SideMenuComponent
  ]
})
export class AdminSharedModule { }
