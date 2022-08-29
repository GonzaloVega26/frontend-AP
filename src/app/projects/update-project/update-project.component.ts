import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  title: string = "";
  description: string = "";
  hostURL: string = "";
  imgURL: string = "";
  constructor(private projectService: ProjectService, 
    private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if(id){
      this.projectService.detail(id).subscribe(
        data =>{
          this.title = data.title;
          this.description = data.description;
          this.hostURL = data.hostURL;
          this.imgURL = data.imgURL;
        }, err =>{
          alert("Error loading Project");
          this.router.navigate(['']);
        })
    }
    
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    if(id){
      this.projectService.update(id, new Project(this.title,
         this.description, this.hostURL, this.imgURL)).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Error updating Project");
           window.location.reload();
        }
      )
    }
    
  }

}
