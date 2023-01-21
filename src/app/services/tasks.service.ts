import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  apiURL: string = environment.apiURL + "/api/Tasks/";

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }

  getAllTasksHints(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL + "hints");
  }

  addTask(addTaskRequest: Task): Observable<Task> {
    return this.http.post<Task>(this.apiURL, addTaskRequest);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(this.apiURL + id);
  }

  updateTask(id: number, taskUpdateRequest: Task): Observable<Task> {
    return this.http.put<Task>(this.apiURL + id, taskUpdateRequest);
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(this.apiURL + id);
  }
}
