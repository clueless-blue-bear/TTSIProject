import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solution } from 'src/app/models/solution.model';
import { Task } from 'src/app/models/task.model';
import { SolutionFile } from 'src/app/models/solutionFile';
import { SolutionsService } from 'src/app/services/solutions.service';
import { TasksService } from 'src/app/services/tasks.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-solution',
  templateUrl: './add-solution.component.html',
  styleUrls: ['./add-solution.component.css']
})
export class AddSolutionComponent implements OnInit {
  fileMessage = "Dodaj plik";
  available_tasks: Task[] = [];
  addSolutionRequest: Solution = {
    id: 0,
    task: 0,
    taskName: '',
    user: '',
    result: '',
  }
  solutionFile: any; 

  constructor(private solutionsService: SolutionsService, private taskService: TasksService,private router: Router) { 
    //this.solutionFile = new File();
  }

  ngOnInit(): void {
    this.taskService.getAllTasks()
    .subscribe({
      next: (task_list) => {
        this.available_tasks = task_list;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  onFileChange(event: Event) {
    const element = event.target as HTMLInputElement;
    
    if (!element.files || element.files.length == 0 || element.files.length > 1) {
      this.solutionFile = "";
      return;
    }

    const extension = element.files[0].name.split('.').pop();
    if (extension != "cpp") {
      this.solutionFile = "";
      this.fileMessage = "Złe rozszerzenie pliku!";
      return;
    }    
    this.solutionFile = (element.files[0] as File);
  }

  addSolution() {
    let file = new SolutionFile();
    //this.solutionFile = (this.solutionFile as File);
    
    file.fileName = this.solutionFile.name;
    file.fileSize = this.solutionFile.size;
    file.fileExtension = "cpp";

    let reader = new FileReader();
    reader.onload = () => {
      file.fileBase64 = reader.result?.toString() ?? "";
      this.solutionsService.addSolution(this.addSolutionRequest, file)
        .subscribe({
          next: (solution) => {
            this.router.navigate(['/solutions'])
          }
        });
    }

    //console.log(this.addTaskRequest);
    reader.readAsDataURL(this.solutionFile);
  }
}
