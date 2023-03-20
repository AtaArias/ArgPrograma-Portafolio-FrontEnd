import { Component } from '@angular/core';
import { Form, FormControl } from '@angular/forms';
import { AboutService } from 'src/app/services/about.service';
import { AuthService } from 'src/app/services/auth.service';
import { About } from './about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  about: About = new About({});

  editable: boolean = true;

  toggleEdit = {
    "title": () => {this.about.titleEdit = !this.about.titleEdit},
    "content": () => {this.about.contentEdit = !this.about.contentEdit},
    "iconUrl": () => {this.about.iconUrlEdit = !this.about.iconUrlEdit},
    "iconDescription": () => {this.about.iconDescriptionEdit = !this.about.iconDescriptionEdit}
  }

  constructor(private authService: AuthService, private aboutService: AboutService) {

  }

  ngOnInit(){
    this.editable = this.authService.logIn;

    this.aboutService.getAbout().subscribe(
      (about) => {
        if (about)
          this.about = about;
      })
  }

  saveAbout(){
    this.aboutService.saveAbout(this.about).subscribe(
      (mssg) => {
        console.log(mssg);

        window.location.reload();
      })
  }
}
