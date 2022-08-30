import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skillURL = "https://backend-portfolio-gv.herokuapp.com/skill";
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.skillURL + '/list');
  }

  public detail(id: number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.skillURL + `/detail-skill/${id}`);
  } 

  public save(skill: Skills): Observable<any>{
    return this.httpClient.post<any>(this.skillURL + '/create-skill', skill);
  }

  public update(id: number, skill: Skills): Observable<any>{
    return this.httpClient.put<any>(this.skillURL + `/update-skill/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.skillURL + `/delete-skill/${id}`);
  }
}
