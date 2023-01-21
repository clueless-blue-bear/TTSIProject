import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Solution } from '../models/solution.model';
import { SolutionFile } from '../models/solutionFile';

@Injectable({
  providedIn: 'root'
})
export class SolutionsService {

  apiURL: string = environment.apiURL;

  constructor(private http: HttpClient) { }

  getAllSolutions(): Observable<Solution[]> {
    return this.http.get<Solution[]>(this.apiURL + "/api/Solutions");
  }

  addSolution(SolutionRequest: Solution, file: SolutionFile): Observable<Solution> {
    const message = JSON.stringify({ solutionRequest: SolutionRequest, file: file });
    console.log("request:\n" + message);
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.http.post<Solution>(this.apiURL + "/api/Solutions/upload", { SolutionRequest, file });
  }

  getSolution(id: number): Observable<Solution> {
    return this.http.get<Solution>(this.apiURL + '/api/Solutions/' + id);
  }

  updateSolution(id: number, SolutionUpdateRequest: Solution): Observable<Solution> {
    return this.http.put<Solution>(this.apiURL + '/api/Solutions/' + id, SolutionUpdateRequest);
  }

  deleteSolution(id: number): Observable<Solution> {
    return this.http.delete<Solution>(this.apiURL + '/api/Solutions/' + id);
  }
}
