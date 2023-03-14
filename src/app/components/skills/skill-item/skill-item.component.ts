import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Skill } from './skill-item.model';


@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent {
  @Input() skill: Skill;

  @Input() editable: boolean = false;
  
  @Output() delete: EventEmitter<Skill> = new EventEmitter;

  mode: ProgressSpinnerMode = "determinate";

  color: ThemePalette = "warn";

  constructor() {
    this.skill = new Skill({name: "Card"})
  }

  deleteSelf(){
    this.delete.emit(this.skill);
  }
}
