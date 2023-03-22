import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CardManagerService } from 'src/app/services/card-manager.service';
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

  constructor(private cardManager: CardManagerService, private authService: AuthService) {
    this.title = "Educación y cursos";
  }

  updateCards() {
    this.cardManager.getEducationCards().subscribe((cards) => 
      this.cards = cards
    )
  } 

  ngOnInit(): void {
    this.updateCards();
  }

  editMode(): boolean {
    return this.authService.logIn;
  }

  myAddCard = (title: string, iconUrl: string, content: string): void => {
    let myCard: Card = new Card({title: title, iconUrl: iconUrl, content: content});
    
    this.cards.push(myCard);
    this.addCardToggle();

    this.cardManager.addEducationCard(myCard).subscribe( (message) => 
     {
      console.log(message);
      this.updateCards();
     })
  }

  removeCard(card: Card){
    this.cards.splice(this.cards.indexOf(card), 1);

    this.cardManager.deleteEducationCard(card).subscribe( (message) => {
      console.log(message);
    }) 
  }

  saveCard(card: Card){
    this.cardManager.addEducationCard(card).subscribe((mssg) => console.log(mssg));
  }
}
