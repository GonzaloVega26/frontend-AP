import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = []
  
 
  constructor(private experienceService: ExperienceService, 
    private tokenService: TokenService, private router: Router) { }
  isLogged = false;
  ngOnInit(): void {
    this.loadExperiences()
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
  }

  loadExperiences():void{
    this.experienceService.list().subscribe(data =>{
      this.experiences = data;
    });

  }

  onDelete(id?: number):void{
    if( id != undefined){
      this.experienceService.delete(id).subscribe(
        data => {
          this.loadExperiences();
        }, err => {
          alert("Problem, deleting element");
        }
      )
    }
  }

}
