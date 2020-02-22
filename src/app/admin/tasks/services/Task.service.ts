import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  readonly API_URL = 'http://127.0.0.1:8000/api/admin/tasks';
  constructor(private http: HttpClient) {}

  getAllTasks() {
    return this.http
      .get(`${this.API_URL}/getTasks`)
      .toPromise()
      .then(res => res)
      .catch(err => err);
  }

  getTask() {}

  sendTask(task) {
    return this.http
      .post(`${this.API_URL}/add`, { task })
      .toPromise()
      .then(res => res)
      .catch(err => err);
  }

  editTask(taskId, content) {
    return this.http
      .put(`${this.API_URL}/edit/${taskId}`, { content })
      .toPromise()
      .then(res => res)
      .catch(err => err);
  }

  deleteTask(taskId) {
    return this.http.delete(`${this.API_URL}/delete/${taskId}`)
      .toPromise()
      .then(res => res)
      .catch(err => err);
  }
}
