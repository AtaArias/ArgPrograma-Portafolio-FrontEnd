import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../components/projects/project-item/project-item.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [];

  constructor() {
    this.projects.push(new Project({name: "Colorblind filter", chips: ['Lua', 'Love2d', 'Utility']}));
    this.projects.push(new Project({name: "Java script"}));
   }

  getProjects(): Project[]{
    return this.projects;
  }

  addProject(proj: Project) {
    this.projects.push(proj);
  }
}
