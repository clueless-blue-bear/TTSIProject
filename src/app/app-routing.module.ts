import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTaskComponent } from './components/tasks/add-task/add-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { AddSolutionComponent } from './components/add-solution/add-solution.component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent},
  { path: 'tasks/add', component: AddTaskComponent },
  { path: 'tasks/edit/:id', component: EditTaskComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'solutions/add', component: AddSolutionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
