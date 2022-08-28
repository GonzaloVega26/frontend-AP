import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUser } from '../model/login-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = "http://localhost:8080/auth/"
  constructor(private httpClient:HttpClient) { }


  public login(loginUser: LoginUser):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + "login", loginUser);
  }
}
