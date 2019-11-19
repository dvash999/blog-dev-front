import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewUsersComponent} from '../components/container/view-users/view-users.component';
import {RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material';

const userRoutes = [
  {path: '', component: ViewUsersComponent}
];

@NgModule({
  declarations: [ViewUsersComponent],
  imports: [
    RouterModule.forChild(userRoutes),
    CommonModule,
    MatTableModule,
  ]
})
export class ManageUsersModule { }
