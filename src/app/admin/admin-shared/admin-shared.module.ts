import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AdminRoutingModule } from '../admin-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    // AdminRoutingModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class AdminSharedModule { }
