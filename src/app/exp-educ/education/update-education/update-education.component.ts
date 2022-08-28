import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-update-education',
  templateUrl: './update-education.component.html',
  styleUrls: ['./update-education.component.css']
})
export class UpdateEducationComponent implements OnInit {
  name: string = "";
  description: string = "";
  constructor(private educationService: EducationService, 
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if(id){
      this.educationService.detail(id).subscribe(
        data =>{
          this.name = data.name;
          this.description = data.description;
        }, err =>{
          alert("Error loading Education");
          this.router.navigate(['']);
        })
    }
    
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    if(id){
      this.educationService.update(id, new Education(this.name, this.description)).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Error updating Education");
           window.location.reload();
        }
      )
    }
    
  }
}
