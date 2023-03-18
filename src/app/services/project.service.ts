import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../components/projects/project-item/project-item.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  apiUrl: String = "http://localhost:8080/project/"

  constructor(private http: HttpClient) {
   }

  getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.apiUrl + "traer");
  }

  addProject(proj: Project): Observable<String> {
    return this.http.post(this.apiUrl + "crear", proj, {responseType:'text'});
  }

  deleteProject(proj: Project): Observable<String> {
    return this.http.delete(this.apiUrl + "delete/" + proj.id, {responseType:'text'});
  }
}
