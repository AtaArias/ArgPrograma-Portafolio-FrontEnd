import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { About } from './about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  about: About;

  editable: boolean = true;

  toggleEdit = {
    "title": () => {this.about.titleEdit = !this.about.titleEdit},
    "content": () => {this.about.contentEdit = !this.about.contentEdit},
    "iconUrl": () => {this.about.iconUrlEdit = !this.about.iconUrlEdit},
    "iconDescription": () => {this.about.iconDescriptionEdit = !this.about.iconDescriptionEdit}
  }

  constructor(private authService: AuthService) {
    this.about = new About({
        title: "About me",
        content: `Soy Atahualpa Arias. Estudiante de física y apasionado por la programación`,
        iconUrl: "https://i1378.photobucket.com/albums/ah89/andreykokhanevich/portfolio%20page/about-me_zpsxhc3gnsv.jpg",
        iconDescription: `Atahualpa Arias (20)`
      })
  }

  ngOnInit(){
    this.editable = this.authService.logIn;
  }

}
