import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { Card } from './inst-card.model';

@Component({
  selector: 'app-inst-card',
  templateUrl: './inst-card.component.html',
  styleUrls: ['./inst-card.component.css']
})
export class InstCardComponent {
  @Input() card: Card;

  @Input() edit: boolean;

  @Output() deleteCard: EventEmitter<Card> = new EventEmitter;

  constructor(){
    
  }

  clickedDelete(){
    console.log("card eliminated" + this.card.id)
    this.deleteCard.emit(this.card);
  }

  // add a way for the card to delete itself


}
