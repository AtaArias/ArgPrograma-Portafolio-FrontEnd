import { Component } from '@angular/core';
import { Card } from '../inst-card/inst-card.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  title: string;
  
  addCardForm: boolean = false;

  cards: Card[] = [];


  constructor() {
    this.title = "Experience";
  }

  addCardToggle(){
    this.addCardForm = !this.addCardForm;
  }

  // make a product list element

  // TODO: change the input from singular elements to an ICard object
  myAddCard = (title: string, iconUrl: string, content: string): void => {
    this.cards.push( new Card({title: title, iconUrl: iconUrl, content: content}));
    this.addCardToggle();
  }
  
  removeCard(card: Card){
    this.cards.splice(this.cards.indexOf(card), 1);
  }
}
