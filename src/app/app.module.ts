import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { ButtonLoginComponent } from './header/button-login/button-login.component';
import { LinkLogoComponent } from './header/link-logo/link-logo.component';
import { BannerComponent } from './header/banner/banner.component';
import { ProfilePicComponent } from './about/profile-pic/profile-pic.component';
import { AboutMeComponent } from './about/about-me/about-me.component';
import { ExperienceComponent } from './exp-educ/experience/experience.component';
import { EducationComponent } from './exp-educ/education/education.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardSoftComponent } from './hard-soft/hard-soft.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'
import { FormsModule } from '@angular/forms';
import { NewExperienceComponent } from './exp-educ/experience/new-experience/new-experience.component';
import { UpdateExperienceComponent } from './exp-educ/experience/update-experience/update-experience.component';
import { NewEducationComponent } from './exp-educ/education/new-education/new-education.component';
import { UpdateEducationComponent } from './exp-educ/education/update-education/update-education.component';
import { NewSkillComponent } from './hard-soft/new-skill/new-skill.component';
import { UpdateSkillComponent } from './hard-soft/update-skill/update-skill.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { UpdateProjectComponent } from './projects/update-project/update-project.component';
import { UpdatePersonaComponent } from './about/update-persona/update-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonLoginComponent,
    LinkLogoComponent,
    BannerComponent,
    ProfilePicComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    HardSoftComponent,
    ProjectsComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NewExperienceComponent,
    UpdateExperienceComponent,
    NewEducationComponent,
    UpdateEducationComponent,
    NewSkillComponent,
    UpdateSkillComponent,
    NewProjectComponent,
    UpdateProjectComponent,
    UpdatePersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
