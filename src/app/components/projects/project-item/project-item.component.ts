import { Component, Input } from '@angular/core';
import { Project } from './project-item.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent {
  @Input() project: Project = new Project({});
}
