import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {
  name: string = "";
  description: string = "";
  constructor(private educationService: EducationService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    if(this.name !== "" || this.description !== ""){
      const education: Education = new Education(this.name, this.description)
      this.educationService.save(education).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error Creating education");
          window.location.reload();
        }
      )

    }else{
      alert("Fields can't be blank")
      window.location.reload();
    }
  }

}
