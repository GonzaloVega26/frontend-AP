import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  name: string = "";
  percentage: number = 0;
  color: string = "#0000";
  constructor(private skillService: SkillsService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    
    if(this.name !== ""){
      const skill: Skills = new Skills(this.name, this.percentage, this.color)
      this.skillService.save(skill).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error Creating Skill");
          window.location.reload();
        }
      )

    }else{
      alert("Fields can't be blank")
      window.location.reload();
    }
  }
}
