import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../components/skills/skill-item/skill-item.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  urlApi: string = "http://localhost:8080/skill/";

  getSkills(tipo: String): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.urlApi + "traer/" + tipo);
  }

}
