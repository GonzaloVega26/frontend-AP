import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  person: Person = new Person("", "", "")
  constructor(public personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getOnePerson().subscribe(data =>{
      this.person = data;
    })
  }

}
