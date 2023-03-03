import { Component } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent {
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

  onSubmit(form: any): void {
    if(this.auth.login(form.user, form.password)) {
      this.router.navigate(['/portofolio']);
    }
  }
}
