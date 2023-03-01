import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Card } from './inst-card.model';

@Component({
  selector: 'app-inst-card',
  templateUrl: './inst-card.component.html',
  styleUrls: ['./inst-card.component.css']
})
export class InstCardComponent {
  @Input() card: Card;

  @Output() deleteCard: EventEmitter<Card> = new EventEmitter;

  constructor(){
    
  }

  clickedDelete(){
    this.deleteCard.emit(this.card);
  }

  // add a way for the card to delete itself


}
