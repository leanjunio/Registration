import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navBarTitle = "Side Project One"; // you can change the title of the navbar here
  classActive = false;
  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
  }

  isActive(){

  }
  // temporary methods for rendering the data
  clickEmployees(){
    //console.log("in getEmployees()");
    this.navbarService.getEmployees()
  }

}
