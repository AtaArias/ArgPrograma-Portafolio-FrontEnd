import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from './project-item.model';


@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent {
  @Input() project: Project = new Project({});

  @Output() update: EventEmitter<Project> = new EventEmitter<Project>;

  @Input() edit: boolean = false;

  editSelf: boolean = false;

  updateSelf() {
    this.update.emit(this.project);
  }

}
