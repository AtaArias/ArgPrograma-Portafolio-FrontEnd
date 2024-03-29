import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = "https://portafolio-backend-5315.onrender.com/user/"

  constructor(private http: HttpClient) { }

  login(user: User): void {
    // http logic and jwt autentication
    this.http.post<User>(this.apiUrl + "login", user).subscribe(
      (user) => {
        localStorage.setItem("log-token", "logeado");
        window.location.href = "/portofolio";
      },error=>alert("Usuario o contraseña incorrecto"))
  }

  logout():void {
    localStorage.removeItem("log-token")
  }

  public get logIn(): boolean {
    return (localStorage.getItem("log-token") != null);
  }
}
