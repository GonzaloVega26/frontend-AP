import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
URL = "http://localhost:8080/person/"
  constructor(private http:HttpClient) { }
  
  public getOnePerson():Observable<Person>{
    return this.http.get<Person>(this.URL+"get-one");
  }
  
}
