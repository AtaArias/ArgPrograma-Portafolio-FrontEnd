import { Component } from '@angular/core';

@Component({
  selector: 'app-inst-card',
  templateUrl: './inst-card.component.html',
  styleUrls: ['./inst-card.component.css']
})
export class InstCardComponent {

  cardContent: string;
  title: string;
  iconUrl: string;

  constructor(){
    this.cardContent = "Contenido de la tarjeta";
    this.title = "Harvard"
    this.iconUrl = "http://clipground.com/images/harvard-clipart-4.jpg";
  }
  
}
