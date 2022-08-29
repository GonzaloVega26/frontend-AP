import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
 bannerURL:string =""
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getOnePerson().subscribe(data =>{
      this.bannerURL = data.bannerURL;
    });
  }

}
