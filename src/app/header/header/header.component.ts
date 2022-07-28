import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  githubLink: string = "https://github.com/GonzaloVega26"
  githubIcon: string = "assets/github-icon.png"

  linkedInLink: string = "https://www.linkedin.com/in/gonzalo-vega26/"
  linkedInIcon: string = "assets/linkedin-icon.png"

  argProgLink: string = "https://argentinaprograma.inti.gob.ar/"
  argProgIcon: string = "assets/arg-programa-icon.png"

  instagramLink: string = "https://www.instagram.com/gonzaavegaa/"
  instagramIcon: string = "assets/instagram-icon.png"
}
