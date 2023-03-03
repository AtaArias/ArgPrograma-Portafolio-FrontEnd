import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: boolean = false;

  constructor(private http: HttpClient) { }

  login(username: string, password: string):boolean {
    // http logic and jwt autentication

    this.token = (username == "user" && password == "1234");

    if(this.token) {
      localStorage.setItem("log-token", "logeado")
    }

    return this.token;
  }

  logout():void {
    localStorage.removeItem("log-token")
  }

  public get logIn(): boolean {
    return (localStorage.getItem("log-token") != null);
  }
}
