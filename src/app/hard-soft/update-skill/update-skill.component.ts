import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent implements OnInit {
  name: string = "";
  percentage: number = 0;
  color: string = "#0000";
  constructor(private skillService: SkillsService, 
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if(id){
      this.skillService.detail(id).subscribe(
        data =>{
          this.name = data.name;
          this.percentage = data.percentage;
          this.color = data.color;
          console.log(data)
        }, err =>{
          alert("Error loading Skill");
          this.router.navigate(['']);
        })
    }
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    if(id){
      this.skillService.update(id, new Skills(this.name, this.percentage, this.color)).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
          console.log(err)
           alert("Error updating Skill");
           window.location.reload();
        }
      )
    }
    
  }

}
