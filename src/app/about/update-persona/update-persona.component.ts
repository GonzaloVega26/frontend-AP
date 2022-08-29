import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-update-persona',
  templateUrl: './update-persona.component.html',
  styleUrls: ['./update-persona.component.css']
})
export class UpdatePersonaComponent implements OnInit {
  name: string = "";
  title: string = "";
  about: string = "";
  imgURL: string = "";
  bannerURL: string = "";
  constructor(private personService: PersonService, 
    private router: Router) { }
  ngOnInit(): void {
    this.personService.getOnePerson().subscribe(
      data =>{
        this.name = data.name;
        this.title = data.title;
        this.about = data.about;
        this.imgURL = data.imgURL;
        this.bannerURL = data.bannerURL;
      }, err =>{
        alert("Error loading Person");
        this.router.navigate(['']);
      })
    
    
  }

  onUpdate(): void{
    this.personService.update(new Person(this.name, this.title,
      this.about, this.imgURL, this.bannerURL)).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
          alert("Error updating Person");
          window.location.reload();
      }
    )
    
    
  }

}
