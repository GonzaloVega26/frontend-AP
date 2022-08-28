import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEducationComponent } from './exp-educ/education/new-education/new-education.component';
import { UpdateEducationComponent } from './exp-educ/education/update-education/update-education.component';
import { NewExperienceComponent } from './exp-educ/experience/new-experience/new-experience.component';
import { UpdateExperienceComponent } from './exp-educ/experience/update-experience/update-experience.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"new-experience", component: NewExperienceComponent},
  {path:"update-experience/:id", component: UpdateExperienceComponent},
  {path:"new-education", component: NewEducationComponent},
  {path:"update-education/:id", component: UpdateEducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
