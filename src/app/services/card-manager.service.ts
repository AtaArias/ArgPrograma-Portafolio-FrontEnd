import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Card } from '../components/inst-card/inst-card.model';

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Response-Type':'text'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CardManagerService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { 

  }

  getExperienceCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl + '/experience/traer');
  }

  getEducationCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl + '/education/traer');
  }

  addExperienceCard(card: Card): Observable<String> {
    return this.http.post(this.apiUrl + '/experience/crear', card, {responseType: 'text'});
  }

  addEducationCard(card: Card): Observable<String> {
    return this.http.post(this.apiUrl + '/education/crear', card, {responseType: 'text'});
  }

  deleteExperienceCard(card: Card): Observable<String> {
    return this.http.delete(this.apiUrl + '/experience/borrar/' + card.id, {responseType: 'text'});
  }

  deleteEducationCard(card: Card): Observable<String> {
    return this.http.delete(this.apiUrl + '/education/borrar/' + card.id, {responseType: 'text'});
  }

  saveExperienceCard(card: Card): Observable<Card> {
    return this.http.put<Card>(this.apiUrl + '/experience/editar/' + card.id, card);
  }
}
