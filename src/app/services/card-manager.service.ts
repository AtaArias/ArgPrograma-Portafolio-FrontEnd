import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Card } from '../components/inst-card/inst-card.model';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardManagerService {
  private apiUrl = 'http://localhost:3000/experience';

  constructor(private http: HttpClient) { 

  }

  getExperienceCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl);
  }
}
