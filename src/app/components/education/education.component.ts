import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  title: string;

  cards: { title:string; iconUrl:string; content:string}[];

  constructor() {
    this.title = "Education";

    this.cards = [
      {title:"Unsl", iconUrl:"http://www.noticias.unsl.edu.ar/wp-content/themes/sirius-lite/assets/img/isologo_unsl_color_footer.png", content:"Actualmente estudiando física"},
      {title:"Harvard", iconUrl:"http://clipground.com/images/harvard-clipart-4.jpg" ,content:"CS50"}
    ]
  }
}
