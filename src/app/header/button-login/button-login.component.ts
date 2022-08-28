import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-button-login',
  templateUrl: './button-login.component.html',
  styleUrls: ['./button-login.component.css']
})
export class ButtonLoginComponent implements OnInit {
  isLogged = false;
  constructor(private router: Router, private tokenService: TokenService) { }
  

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  logout(): void {
    this.tokenService.logout();
    window.location.reload();
  }

  login(){
    this.router.navigate(["/login"])
  }

}
