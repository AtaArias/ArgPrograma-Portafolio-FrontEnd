import { Component } from '@angular/core';
import { Skill } from './skill-item.model';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent {
  skill: Skill;

  constructor() {
    this.skill = new Skill({name: "Java Script"})
  }


}
