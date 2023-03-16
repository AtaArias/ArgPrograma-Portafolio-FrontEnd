import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Project } from '../project-item/project-item.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-project-form',
  templateUrl: './add-project-form.component.html',
  styleUrls: ['./add-project-form.component.css']
})
export class AddProjectFormComponent {
  myForm: FormGroup;

  @Input() defaultProj: Project = new Project({});

  @Output() projectAdder: EventEmitter<Project>;

  constructor(private fb: FormBuilder) {

    this.projectAdder = new EventEmitter<Project>;
  }

  ngOnInit() {
    const datePipe: DatePipe = new DatePipe('en_US');

    this.myForm = this.fb.group({
      name: this.defaultProj.name,
      date: this.defaultProj.date,
      description: this.defaultProj.description,
      imageUrl: this.defaultProj.imageUrl,
      sourceUrl: this.defaultProj.sourceUrl
    })
  }

  addProject(){
    let formValue = this.myForm.value;

    if(this.defaultProj != undefined){
      Object.assign(this.defaultProj, formValue);
    } 

    let projectToAdd = new Project(formValue);
    this.projectAdder.emit(projectToAdd);
  }
}
