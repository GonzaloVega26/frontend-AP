import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-logo',
  templateUrl: './link-logo.component.html',
  styleUrls: ['./link-logo.component.css']
})
export class LinkLogoComponent implements OnInit {

  @Input() srcIcon:string = ""
  @Input() hrefLink: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
