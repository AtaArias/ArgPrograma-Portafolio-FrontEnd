import { Component } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
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

        // for each project on the list bring its chips
        this.projects.forEach(
          (project) => {
            this.projectService.getChips(project).subscribe(
              (chips) => {
                project.chips = chips;
              })
          }
        )
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

  updateCard(event: {project: Project, action: string}){
    if(event.action == "update"){
      this.projectService.addProject(event.project).subscribe(
        (mssg) => {
          this.retrieveProjects()
          console.log(mssg);
        }
      );
    } else if (event.action == "delete"){
      this.projectService.deleteProject(event.project).subscribe(
        (mssg) => {
          this.projects.splice(this.projects.indexOf(event.project), 1);
          console.log(mssg);
        }
      )
    }
  }
}
