import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from '../model/login-user';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUser! : LoginUser;
  email!: string;
  password!: string;
  roles: string[] = [];
  errMessage!: string


  constructor(private tokenService: TokenService,
    private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin() :void {
    this.loginUser = new LoginUser(this.email, this.password);

       this.authService.login(this.loginUser).subscribe(data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setEmail(data.email);
        this.tokenService.setAuthorities(data.authorities);
        this.router.navigate([""]);
       }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMessage = err.error.mensaje;
        console.log(this.errMessage)
       })
  }
}
