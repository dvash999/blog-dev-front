import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewUsersComponent} from '../components/container/view-users/view-users.component';
import {RouterModule} from '@angular/router';

const userRoutes = [
  {path: '', component: ViewUsersComponent}
];

@NgModule({
  declarations: [ViewUsersComponent],
  imports: [
    RouterModule.forChild(userRoutes),
    CommonModule
  ]
})
export class ManageUsersModule { }
