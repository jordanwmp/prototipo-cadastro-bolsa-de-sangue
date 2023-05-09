import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  hospital:string = ''
  constructor() { }

  ngOnInit(): void 
  {
    if(localStorage.getItem('hospitalSelected'))
    {
      this.hospital = localStorage.getItem('hospitalSelected')!;
    }
  }

}
