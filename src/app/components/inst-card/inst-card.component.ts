import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-inst-card',
  templateUrl: './inst-card.component.html',
  styleUrls: ['./inst-card.component.css']
})
export class InstCardComponent {
  @Input() cardContent: string = "Contenido de la tarjeta";
  @Input() title: string = "Título de la tarjeta";
  @Input() iconUrl: string = "";

  constructor(){
    this.title,
    this.iconUrl,
    this.cardContent
  }

}
