import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.css']
})
export class ProfilePicComponent implements OnInit {
  imgURL:string = ""
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getOnePerson().subscribe(data =>{
      this.imgURL = data.imgURL;
    });
  }

}
