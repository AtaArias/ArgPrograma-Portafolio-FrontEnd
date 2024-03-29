import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../components/projects/project-item/project-item.model';
import { HttpClient } from '@angular/common/http';
import { Chip } from '../components/projects/chip.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  apiUrl: String = "https://portafolio-backend-5315.onrender.com/project/"

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

  getChips(proj: Project): Observable<Chip[]> {
    return this.http.get<Chip[]>(this.apiUrl + "chips/" + proj.id);
  }

  deleteChip(chip: Chip): Observable<String> {
    return this.http.delete(this.apiUrl + "delete/chip/" + chip.id, {responseType:'text'});
  }
}
