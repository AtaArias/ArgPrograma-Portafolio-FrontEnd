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
    this.title = "Education";
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
    
    this.cardManager.addEducationCard(myCard).subscribe( (message) => 
     {
      console.log(message);
      this.updateCards();
      this.addCardToggle();
     })
  }

  removeCard(card: Card){
    this.cardManager.deleteEducationCard(card).subscribe( (message) => {
      this.cards.splice(this.cards.indexOf(card), 1);
      console.log(message);
    }) 
  }
}
