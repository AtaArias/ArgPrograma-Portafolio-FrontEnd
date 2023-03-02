import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Card } from '../components/inst-card/inst-card.model';

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CardManagerService {
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { 

  }

  getExperienceCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl + 'experience');
  }

  getEducationCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl + 'education');
  }

  addExperienceCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.apiUrl + 'experience', card, httpOptions);
  }

  addEducationCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.apiUrl + 'education', card, httpOptions);
  }

  deleteExperienceCard(card: Card): Observable<Card> {
    return this.http.delete<Card>(this.apiUrl + 'experience/' + card.id);
  }

  deleteEducationCard(card: Card): Observable<Card> {
    return this.http.delete<Card>(this.apiUrl + 'education/' + card.id);
  }
}
