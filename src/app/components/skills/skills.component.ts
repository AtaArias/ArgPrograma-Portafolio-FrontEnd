import { Component } from '@angular/core';
import { Skill } from './skill-item/skill-item.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  title: string;

  hardSkills: Skill[] = [
    new Skill({
      name: "Lua",
      percentage: 80
    }),
    new Skill({
      name: "Python",
      percentage: 20
    }),
    new Skill({
      name: "R",
      percentage: 40
    }),
    new Skill({
      name: "SQL",
      percentage: 50
    })
  ]

  constructor() {
    this.title = "Skills";
  }
}
