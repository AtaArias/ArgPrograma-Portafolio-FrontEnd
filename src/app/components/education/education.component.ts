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

  myAddCard = (title: string, iconUrl: string, content: string): void => {
    let myCard: Card = new Card({title: title, iconUrl: iconUrl, content: content});
    
    this.cardManager.addEducationCard(myCard).subscribe( (card) => 
     {
      this.cards.push(card);
     })
    this.addCardToggle();
  }

  constructor(private cardManager: CardManagerService, private authService: AuthService) {
    this.title = "Education";
  }

  ngOnInit(): void {
    this.cardManager.getEducationCards().subscribe((cards) => {
      this.cards = cards;}
    )
  }

  editMode(): boolean {
    return this.authService.logIn;
  }

  removeCard(card: Card){
    this.cardManager.deleteEducationCard(card).subscribe( () => {
      this.cards.splice(this.cards.indexOf(card), 1);
    }) 
  }
}
