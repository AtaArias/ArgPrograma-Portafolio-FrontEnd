import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Skill } from '../skill-item/skill-item.model';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent {

  @Input() skills: Array<Skill> = [];

  skillForm: boolean = false;

  @Input() listType: string = "hard";

  nameControl = new FormControl('Habilidad');

  percentageControl = new FormControl(50);

  constructor() {
    
  }

  skillFormToggle() {
    this.skillForm = !this.skillForm;
  }

  deleteSkill(skill: Skill) {
    this.skills.splice(this.skills.indexOf(skill), 1);
  }

  addSkill() {
    this.skills.push(new Skill({
      name: this.nameControl.value || "",
      percentage: this.percentageControl.value || 50,
      type: this.listType
    }));
  }
}
