import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../components/skills/skill-item/skill-item.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  urlApi: string = "https://portafolio-backend-5315.onrender.com/skill/";

  getSkills(tipo: String): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.urlApi + "traer/" + tipo);
  }

  addSkill(skill: Skill): Observable<String> {
    return this.http.post(this.urlApi + "crear", skill, {responseType: 'text'});
  }

  deleteSkill(skill: Skill): Observable<String> {
    return this.http.delete(this.urlApi + "borrar/" + skill.id, {responseType: 'text'});
  }
}
