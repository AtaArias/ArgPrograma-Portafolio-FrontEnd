import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from '../project-item/project-item.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [];
  logged: boolean = false;

  constructor(private projectService: ProjectService, private authServce: AuthService) {
  }

  retrieveProjects() {
    this.projectService.getProjects().subscribe(
      (projects) => {
        this.projects = projects;
      }
    );
  }

  ngOnInit() {
    this.retrieveProjects()
    this.logged = this.authServce.logIn;
  }

  addProject(proj: Project) {
    console.log(proj);
    this.projectService.addProject(proj).subscribe(
      (mssg) => {
        this.retrieveProjects();
        console.log(mssg);
      }
    );
  }

  updateCard(proj: Project){
    this.projectService.addProject(proj).subscribe(
      (mssg) => {
        this.retrieveProjects()
        console.log(mssg);
      }
    );
  }
}
