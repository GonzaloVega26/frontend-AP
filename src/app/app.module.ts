import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { ButtonLoginComponent } from './header/button-login/button-login.component';
import { LinkLogoComponent } from './header/link-logo/link-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonLoginComponent,
    LinkLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
