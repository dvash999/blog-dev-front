import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import { LogoutComponent } from './logout/logout.component';
import { SideMenuModule } from './side-menu/side-menu.module';
import { TopIndicatorComponent } from './top-indicator/top-indicator.component';
import { SharedModule } from '../../shared/shared.module';
import { TransformImgPipe } from '../../shared/pipes/transform-img.pipe';
import { Truncate3Dots } from '../../shared/pipes/Truncate3Dots.pipe';

@NgModule({
  declarations: [LogoutComponent, TopIndicatorComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    SideMenuModule,
    SharedModule
  ],
  exports: [SideMenuComponent, LogoutComponent, TopIndicatorComponent, TransformImgPipe, Truncate3Dots]
})
export class AdminSharedModule {}
