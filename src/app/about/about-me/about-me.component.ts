import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/services/person.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  person: Person = new Person("", "", "","","")
  isLogged = false;
  constructor(public personService: PersonService,
    private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.loadPerson()
    

    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
  }

  loadPerson():void{
    this.personService.getOnePerson().subscribe(data =>{
      this.person = data;
    })
  }

}
