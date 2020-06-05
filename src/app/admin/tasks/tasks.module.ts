import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { AdminSharedModule } from '../shared/admin-shared.module';
import { FormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';
import { TasksResolver } from '../services/tasks/tasksResolver.service';

const routes: Route[] = [
  {path: '', component: TasksComponent, resolve: {tasks: TasksResolver}}
];

@NgModule({
  declarations: [TasksComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    AdminSharedModule,
    FormsModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
