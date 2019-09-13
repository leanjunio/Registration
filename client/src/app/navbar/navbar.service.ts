import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  baseUrl = "https://glacial-shelf-53509.herokuapp.com/";
  //constructor() { }
  constructor(private httpClient: HttpClient){}

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
     console.log("entered getData(): " + this.baseUrl + path);
     this.httpClient.get(this.baseUrl + path).subscribe((res)=>{
            console.log(res);
        });
        //window.location.href = this.baseUrl + path;
  }
}
