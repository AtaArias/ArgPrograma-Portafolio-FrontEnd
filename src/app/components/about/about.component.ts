import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  title: string;

  aboutContent: string;

  iconUrl: string;
  
  iconDescription: string;

  constructor() {
    this.title = "About me";
    this.aboutContent = `Soy Atahualpa Arias. Estudiante de física y apasionado por la programación`;
    this.iconUrl = "https://i1378.photobucket.com/albums/ah89/andreykokhanevich/portfolio%20page/about-me_zpsxhc3gnsv.jpg";
    this.iconDescription = `Atahualpa Arias (20)`;
  }


}
