import { Component } from '@angular/core';
import { Card } from '../inst-card/inst-card.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  title: string;
  
  addCardForm: boolean = false;

  cards: Card[];

  addCardToggle(){
    this.addCardForm = !this.addCardForm;
  }

  // make a product list element

  // TODO: change the input from singular elements to an ICard object
  myAddCard = (title: string, iconUrl: string, content: string): void => {
    this.cards.push( new Card({title: title, iconUrl: iconUrl, content: content}));
    this.addCardToggle();
  }

  constructor() {
    this.title = "Education";

    this.cards = [
      new Card({title:"Unsl", 
              iconUrl:"http://www.noticias.unsl.edu.ar/wp-content/themes/sirius-lite/assets/img/isologo_unsl_color_footer.png", 
              content:"Actualmente estudiando física"}),

      new Card({title:"Harvard", 
              iconUrl:"http://clipground.com/images/harvard-clipart-4.jpg" ,
              content:"CS50"})
    ]
  }

  removeCard(card: Card){
    this.cards.splice(this.cards.indexOf(card), 1);
  }
}
