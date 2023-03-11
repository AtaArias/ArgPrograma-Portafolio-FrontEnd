import { Component, Input } from '@angular/core';
import { Skill } from '../skill-item/skill-item.model';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent {

  @Input() skills: Array<Skill>;


  constructor() {
    
  }

  deleteSkill(skill: Skill) {
    this.skills.splice(this.skills.indexOf(skill), 1);
  }
}
