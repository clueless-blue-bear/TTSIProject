import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  addTaskRequest: Task = {
    id: 0,
    olympiad: 0,
    stage: 0,
    name: '',
    code: ''
  }

  constructor(private tasksService: TasksService, 
    private router: Router,
    private jwtHelper: JwtHelperService
  ) { }

  ngOnInit(): void {
  }

  isUserAuthenticated(): boolean {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }

    return false;
  }

  public logOut = () => {
    localStorage.removeItem("jwt")
  }

  addTask() {
    //console.log(this.addTaskRequest);
    this.tasksService.addTask(this.addTaskRequest)
    .subscribe({
      next: (task) => {
        this.router.navigate(['/tasks/add'])
      }
    });
  }

}
