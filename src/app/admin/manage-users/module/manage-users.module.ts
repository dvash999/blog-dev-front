import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewUsersComponent} from '../components/container/view-users/view-users.component';
import {RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material';
import {TableModule} from '../../shared/table/table.module';
import { AdminSharedModule } from '../../shared/admin-shared.module';

const userRoutes = [
  {path: '', component: ViewUsersComponent}
];

@NgModule({
  declarations: [ViewUsersComponent],
  imports: [
    RouterModule.forChild(userRoutes),
    CommonModule,
    MatTableModule,
    TableModule,
    AdminSharedModule
  ]
})
export class ManageUsersModule { }
