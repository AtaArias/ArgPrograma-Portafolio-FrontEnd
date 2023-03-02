import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: boolean = false;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    // http logic and jwt autentication

    this.token = (username == "user" && password == "1234");
  }

  logout():void {
    this.token = false;
  }

  public get logIn(): boolean {
    return this.token;
  }
}
