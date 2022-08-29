import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatePersonaComponent } from './about/update-persona/update-persona.component';
import { NewEducationComponent } from './exp-educ/education/new-education/new-education.component';
import { UpdateEducationComponent } from './exp-educ/education/update-education/update-education.component';
import { NewExperienceComponent } from './exp-educ/experience/new-experience/new-experience.component';
import { UpdateExperienceComponent } from './exp-educ/experience/update-experience/update-experience.component';
import { NewSkillComponent } from './hard-soft/new-skill/new-skill.component';
import { UpdateSkillComponent } from './hard-soft/update-skill/update-skill.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewProjectComponent } from './projects/new-project/new-project.component'
import { UpdateProjectComponent } from './projects/update-project/update-project.component'

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"new-experience", component: NewExperienceComponent},
  {path:"update-experience/:id", component: UpdateExperienceComponent},
  {path:"new-education", component: NewEducationComponent},
  {path:"update-education/:id", component: UpdateEducationComponent},
  {path:"new-skill", component: NewSkillComponent},
  {path:"update-skill/:id", component: UpdateSkillComponent},
  {path:"new-project", component: NewProjectComponent},
  {path:"update-project/:id", component: UpdateProjectComponent},
  {path:"update-person", component: UpdatePersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
