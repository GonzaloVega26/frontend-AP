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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
