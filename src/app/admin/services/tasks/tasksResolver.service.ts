import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';
import { TaskService } from '../../tasks/services/task.service';

@Injectable({
  providedIn: 'root'
})

export class TasksResolver implements Resolve<Observable<Task[]>> {

  constructor(private taskService: TaskService) {}

  resolve(): Observable<Task[]> {
    return this.taskService.getAllTasks();
  }
}
