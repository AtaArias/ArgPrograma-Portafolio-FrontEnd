import { Component } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent {
  myUser: User = new User();

  logInForm: FormGroup;

  userInput: AbstractControl;
  passInput: AbstractControl;

  constructor(fb: FormBuilder, private auth: AuthService, private router: Router){
    this.logInForm = fb.group({
      'user': ['', Validators.required],
      'password': ['', Validators.required]
    })

    this.userInput = this.logInForm.controls['user'];
    this.passInput = this.logInForm.controls['password'];
  }

  goHome() {
    this.router.navigate(['/portofolio']);
  }

  logIn(): void {
    this.myUser.password = this.passInput.value;
    this.myUser.username = this.userInput.value;
    this.auth.login(this.myUser)
  }
}
