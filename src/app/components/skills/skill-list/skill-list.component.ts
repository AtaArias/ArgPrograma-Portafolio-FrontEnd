import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from '../skill-item/skill-item.model';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent {

  @Input() skills: Array<Skill> = [];

  @Input() editable: boolean = false;

  @Input() listType: string = "";

  skillForm: boolean = false;

  nameControl = new FormControl('Habilidad');

  percentageControl = new FormControl(50);

  constructor(private skillService: SkillService) {
    
  }

  skillFormToggle() {
    this.skillForm = !this.skillForm;
  }

  deleteSkill(skill: Skill) {
    this.skillService.deleteSkill(skill).subscribe(
      (mssg) => {
        console.log(mssg);

        this.skills.splice(this.skills.indexOf(skill), 1);
      }
    )
  }

  addSkill() {
    let newSkill: Skill = new Skill({
      name: this.nameControl.value || "",
      percentage: this.percentageControl.value || 50,
      type: this.listType})

    this.skillService.addSkill(newSkill).subscribe(
      (mssg) => {
        if(mssg == "Skill guardada") {
          this.skills.push(newSkill);
        }

        console.log(mssg);
      }
    )
    
  }
}
