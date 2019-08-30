import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AdminSharedModule} from './admin-shared/admin-shared.module';
import {AdminRoutingModule} from './admin-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    AdminSharedModule
  ],
  exports: [

  ]
})
export class AdminModule { }
