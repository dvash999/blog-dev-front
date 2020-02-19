import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from './services/Task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  isToggled = false;
  taskInput: string;
  tasks: string[];
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getAllTasks().then(res => {
      this.tasks = res.payload;
    });
  }

  confirmTask() {
    this.taskService.sendTask(this.taskInput).then(res => {
      console.log(res)
      if (res.message === 'success') {
        this.tasks.push(this.taskInput);
        this.taskInput = '';
      }
    });
  }

  getInput(e) {
    this.taskInput = e.target.value;
  }

}
