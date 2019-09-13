import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Administrators } from '../administrators';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 // adminURL: string = 'https://glacial-shelf-53509.herokuapp.com/administrators';
 // constructor(private httpClient: HttpClient) { }
 constructor(){}
 
  submit() {
     console.log("in submit()");
    //return this.httpClient.get<any[]>(`${this.adminURL}`);
    //window.location.href = this.adminURL;
  }
}
