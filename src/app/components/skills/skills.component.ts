import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from './skill-item/skill-item.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  edit: boolean = false;

  title: string;

  hardSkills: Skill[];
  softSkills: Skill[];

  constructor(private skillService: SkillService, private authService: AuthService) {
    this.title = "Skills";
    
    this.edit = this.authService.logIn;
  }

  ngOnInit() {
    this.skillService.getSkills('hard').subscribe(
      (skills) => {
        this.hardSkills = skills;
      })

    this.skillService.getSkills('soft').subscribe(
      (skills) => {
        this.softSkills = skills;
      }
    )
  }
}
