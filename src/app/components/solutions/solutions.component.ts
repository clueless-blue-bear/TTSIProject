import { Component, OnInit } from '@angular/core';
import { Solution } from 'src/app/models/solution.model';
import { SolutionsService } from 'src/app/services/solutions.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {
  solutions_list: Solution[] = [];

  constructor(private solutionsService: SolutionsService) { }

  ngOnInit(): void {
    this.solutionsService.getAllSolutions()
    .subscribe({
      next: (solutions) => {
        console.log(solutions);
        this.solutions_list = solutions;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
