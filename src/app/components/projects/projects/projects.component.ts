import { Component } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from '../project-item/project-item.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  addProject(proj: Project) {
    console.log(proj);
    this.projectService.addProject(Project);
    this.projects.push(proj);
  }

  updateCard(proj: Project){
    this.projectService.addProject(Project);
  }
}
