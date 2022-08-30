import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  expURL = "https://backend-portfolio-gv.herokuapp.com/experience";

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(this.expURL + '/list');
  }

  public detail(id: number): Observable<Experience>{
    return this.httpClient.get<Experience>(this.expURL + `/detail-experience/${id}`);
  } 

  public save(experience: Experience): Observable<any>{
    return this.httpClient.post<any>(this.expURL + '/create-experience', experience);
  }

  public update(id: number, experience: Experience): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `/update-experience/${id}`, experience);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `/delete-experience/${id}`);
  }

}
