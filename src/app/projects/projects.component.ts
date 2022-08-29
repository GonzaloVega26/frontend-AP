import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../model/project';
import { ProjectService } from '../services/project.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = []
  
  constructor(private projectService: ProjectService, 
    private tokenService: TokenService, private router: Router) { }
  isLogged = false;

  ngOnInit(): void {
    this.loadProjects()
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
  }

  loadProjects():void{
    this.projectService.list().subscribe(data =>{
      this.projects = data;
    });

  }

  onDelete(id?: number):void{
    if( id != undefined){
      this.projectService.delete(id).subscribe(
        data => {
          this.loadProjects();
        }, err => {
          alert("Problem, deleting element");
        }
      )
    }
  }


}
