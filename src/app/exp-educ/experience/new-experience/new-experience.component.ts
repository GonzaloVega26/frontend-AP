import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {
  name: string = "";
  description: string = "";
  constructor(private experienceService: ExperienceService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    if(this.name !== "" || this.description !== ""){
      const experience: Experience = new Experience(this.name, this.description)
      this.experienceService.save(experience).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error Creating Experience");
          window.location.reload();
        }
      )

    }else{
      alert("Fields can't be blank")
      window.location.reload();
    }
  }

}
