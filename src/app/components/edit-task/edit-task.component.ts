import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  public taskDetails: Task = {
    id: 0,
    olympiad: 0,
    stage: 0,
    name: '',
    code: ''
  };

  constructor(private route: ActivatedRoute, private tasksService: TasksService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id: number = Number(params.get('id'));        
        if (id) {
          // call api
          this.tasksService.getTask(id)
          .subscribe({
            next: (response) => {
              this.taskDetails = response;
            }
          });
        }
      }
    });
  }

  updateTask() {
    this.tasksService.updateTask(this.taskDetails.id, this.taskDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['tasks']);
      }
    });
  }

  deleteTask(id: number) {
    console.log(id);
    this.tasksService.deleteTask(id)
    .subscribe({
      next: () => {
        this.router.navigate(['tasks']);
      }
    });
  }

}
