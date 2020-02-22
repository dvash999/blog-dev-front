import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from './services/Task.service';
import { NotificationsService } from '../../blog/features/notifications/notifications.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  isToggled = false;
  isToggleEditTask: number;
  taskInput: string;
  tasks: string[];
  constructor(
    private taskService: TaskService,
    private notificationService: NotificationsService
  ) {}

  ngOnInit() {
    this.getTasks();
  }

  getInput(e) {
    this.taskInput = e.target.value;
  }

  getTasks() {
    this.taskService.getAllTasks().then(res => {
      this.tasks = res.payload;
    });
  }

  confirmTask() {
    this.taskService.sendTask(this.taskInput).then(res => {
      if (res.message === 'success') {
        this.tasks.push(res.payload);
        this.taskInput = '';
        this.notificationService.success();
      }
    });
  }

  editTask(taskId, task) {
    this.taskService.editTask(taskId, task).then(res => {
      if (res.message === 'success') {
        this.isToggleEditTask = null;
        this.notificationService.success();
      }
    });
  }

  deleteTask(taskId, index) {
    this.taskService.deleteTask(taskId).then(res => {
      if (res.message === 'success') {
        this.tasks.splice(index, 1);
        this.isToggleEditTask = null;
        this.notificationService.success();
      }
    });
  }
}
