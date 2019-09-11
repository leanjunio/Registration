import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navBarTitle = "Side Project One"; // you can change the title of the navbar here

  constructor() { }

  ngOnInit() {
  }

}
