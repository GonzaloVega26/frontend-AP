import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-update-experience',
  templateUrl: './update-experience.component.html',
  styleUrls: ['./update-experience.component.css']
})
export class UpdateExperienceComponent implements OnInit {
  name: string = "";
  description: string = "";
  constructor(private experienceService: ExperienceService, 
    private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if(id){
      this.experienceService.detail(id).subscribe(
        data =>{
          this.name = data.name;
          this.description = data.description;
        }, err =>{
          alert("Error loading Experience");
          this.router.navigate(['']);
        })
    }
    
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    if(id){
      this.experienceService.update(id, new Experience(this.name, this.description)).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Error updating Experience");
           window.location.reload();
        }
      )
    }
    
  }

}
