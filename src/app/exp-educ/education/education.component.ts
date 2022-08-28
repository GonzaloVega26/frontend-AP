import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: Education[] = []
  constructor(private educationService: EducationService, 
    private tokenService: TokenService, private router: Router) { }

  isLogged = false;
  
  ngOnInit(): void {
    this.loadEducations();

    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
  }

  loadEducations():void{
    this.educationService.list().subscribe(data =>{
      this.educations = data;
    });

  }

  onDelete(id?: number):void{
    
    if( id != undefined){
      this.educationService.delete(id).subscribe(
        data => {
          this.loadEducations();
        }, err => {
          alert("Problem, deleting element");
        }
      )
    }
  }
}
