import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Chip } from '../chip.model';
import { Project } from './project-item.model';


@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent {
  @Input() project: Project = new Project({});

  @Output() update: EventEmitter<{project: Project, action: string}> = new EventEmitter<{project: Project, action: string}>;

  @Input() edit: boolean = false;

  editSelf: boolean = false;

  constructor(private projectService: ProjectService) {

  }

  updateSelf() {
    this.update.emit({project: this.project, action:"update"});
  }

  addChip(chipName: string) {
    this.project.chips.push(new Chip({projectId: this.project.id, name: chipName}));
  }

  deleteChip(chip: Chip) {
    this.projectService.deleteChip(chip).subscribe(
      (mssg) => {
        console.log(mssg)
        this.project.chips.splice(this.project.chips.indexOf(chip), 1)
      }
    )
  }

  deleteProject() {
    this.update.emit({project: this.project, action: "delete"});
  }
}
