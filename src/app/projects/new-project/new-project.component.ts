import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  title: string = "";
  description: string = "";
  hostURL: string = "";
  imgURL: string = "";
  constructor(private projectService: ProjectService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    if(this.title !== "" || this.description !== ""){
      const project: Project = new Project(this.title, this.description, this.hostURL, this.imgURL)
      this.projectService.save(project).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error Creating Project");
          window.location.reload();
        }
      )

    }else{
      alert("Fields can't be blank")
      window.location.reload();
    }
  }
}
