import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from '../model/skills';
import { SkillsService } from '../services/skills.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-hard-soft',
  templateUrl: './hard-soft.component.html',
  styleUrls: ['./hard-soft.component.css']
})
export class HardSoftComponent implements OnInit {
  skills: Skills[] = []
  
 
  constructor(private skillService: SkillsService, 
    private tokenService: TokenService, private router: Router) { }

  isLogged = false;

  ngOnInit(): void {
    this.loadSkills()
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
  }

  loadSkills():void{
    this.skillService.list().subscribe(data =>{
      this.skills = data;
    });

  }

  onDelete(id?: number):void{
    if( id != undefined){
      this.skillService.delete(id).subscribe(
        data => {
          this.loadSkills();
        }, err => {
          alert("Problem, deleting element");
        }
      )
    }
  }

}
