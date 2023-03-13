import { Component } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from './skill-item/skill-item.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  title: string;

  hardSkills: Skill[];

  constructor(private skillService: SkillService) {
    this.title = "Skills";
  }

  ngOnInit() {
    this.skillService.getSkills('hard').subscribe(
      (skills) => {
        this.hardSkills = skills;
      })
  }
}
