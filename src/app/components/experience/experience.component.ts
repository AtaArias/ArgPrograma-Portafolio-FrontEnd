import { Component } from '@angular/core';

import { Card } from '../inst-card/inst-card.model';

import { CardManagerService } from 'src/app/services/card-manager.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  title: string;
  
  addCardForm: boolean = false;

  cards: Card[];


  constructor(private cardService: CardManagerService, private authService: AuthService) {
    this.title = "Experience";
  }

  updateCards() {
    this.cardService.getExperienceCards().subscribe((cards)=> 
      this.cards = cards
    );
  }

  ngOnInit(): void {
    
    this.updateCards();

  }

  addCardToggle(){
    this.addCardForm = !this.addCardForm;
  }


  editMode(): boolean {
    return this.authService.logIn;
  }

  myAddCard = (title: string, iconUrl: string, content: string): void => {
    let myCard: Card = new Card({title: title, iconUrl: iconUrl, content: content});
    
    this.cardService.addExperienceCard(myCard).subscribe((message) => {
      console.log(message);
      this.updateCards();
      this.addCardToggle();
    });
  }
  
  removeCard(card: Card){
    this.cardService.deleteExperienceCard(card).subscribe(() => {
      this.cards.splice(this.cards.indexOf(card),1);
    })
  }

  saveCard(card: Card){
    this.cardService.addExperienceCard(card).subscribe((resp) => console.log(resp));
  }
}