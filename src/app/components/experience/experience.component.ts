import { Component } from '@angular/core';
import { ICard } from 'src/app/ICard';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  title: string;
  
  addCardForm: boolean = false;

  cards: ICard[] = [];


  constructor() {
    this.title = "Experience";
  }

  addCardToggle(){
    this.addCardForm = !this.addCardForm;
  }

  // TODO: change the input from singular elements to an ICard object
  myAddCard = (title: string, iconUrl: string, content: string): void => {
    this.cards.push({title: title, iconUrl: iconUrl, content: content});
    this.addCardToggle();
  }  
}
