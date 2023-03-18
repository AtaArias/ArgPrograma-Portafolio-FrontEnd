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

  update = {
    "title": (data: string) => {this.about.title = data},
    "content": (data: string) => {this.about.content = data},
    "iconUrl": (data: string) => {this.about.iconUrl = data},
    "iconDescription": (data: string) => {this.about.iconDescription = data}
  }

  titleField: FormControl = new FormControl();
  contentField: FormControl = new FormControl();
  iconUrlField: FormControl = new FormControl();
  iconDescField: FormControl = new FormControl();

  constructor(private authService: AuthService, private aboutService: AboutService) {

  }

  ngOnInit(){
    this.editable = this.authService.logIn;

    this.aboutService.getAbout().subscribe(
      (about) => {
        this.about = about;

        this.titleField.setValue(this.about.title);
        this.contentField.setValue(this.about.content);
        this.iconUrlField.setValue(this.about.iconUrl);
        this.iconDescField.setValue(this.about.iconDescription);
      })
  }

  inputDirty(): boolean{
    return  this.titleField.dirty || 
            this.contentField.dirty ||
            this.iconDescField.dirty ||
            this.iconDescField.dirty
            ;
  }

  saveAbout(){
    this.aboutService.saveAbout(this.about).subscribe(
      (mssg) => {
        console.log(mssg);

        window.location.reload();
      })
  }
}
