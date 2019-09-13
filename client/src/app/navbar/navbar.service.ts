import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  // getEmployees(){
  //   console.log("entered getEmployees()");
  // }
  // getTeams(){
  //   console.log("entered getTeams()");
  // }
  // getProjects(){
  //   console.log("entered getProjects()");
  // }
  // getPositions(){
  //   console.log("entered getPositions()");
  // }
  // getAdministrators(){
  //   console.log("entered getAdministrators()");
  // }
  getData(path){
    console.log("entered " + path);
  }
}
