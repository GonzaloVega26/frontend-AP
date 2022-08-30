import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
personURL = "https://backend-portfolio-gv.herokuapp.com/person"
  constructor(private httpClient:HttpClient) { }
  
  public getOnePerson():Observable<Person>{
    return this.httpClient.get<Person>(this.personURL+"/get-one");
  }
  public update(person: Person): Observable<any>{
    return this.httpClient.put<any>(this.personURL + `/update-person`, person);
  }
}
