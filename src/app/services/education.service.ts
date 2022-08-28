import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  eduURL = "http://localhost:8080/education";
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Education[]>{
    return this.httpClient.get<Education[]>(this.eduURL + '/list');
  }

  public detail(id: number): Observable<Education>{
    return this.httpClient.get<Education>(this.eduURL + `/detail-education/${id}`);
  } 

  public save(education: Education): Observable<any>{
    return this.httpClient.post<any>(this.eduURL + '/create-education', education);
  }

  public update(id: number, education: Education): Observable<any>{
    return this.httpClient.put<any>(this.eduURL + `/update-education/${id}`, education);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.eduURL + `/delete-education/${id}`);
  }

}
