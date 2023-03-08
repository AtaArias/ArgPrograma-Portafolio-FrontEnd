import { Injectable } from '@angular/core';

import { About } from '../components/about/about.model';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getAbout(): Observable<About>{
    return this.http.get<About>(this.apiUrl + "/about/traer")
  }

  saveAbout(about: About): Observable<String> {
    return this.http.post(this.apiUrl + "/about/crear", about, {responseType: 'text'});
  }
}
