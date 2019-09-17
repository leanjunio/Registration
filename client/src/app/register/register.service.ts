import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
// adminURL: string = 'https://glacial-shelf-53509.herokuapp.com/administrators';
 port ='http://localhost:4200/signup';
 constructor(private httpClient: HttpClient) { }
 //constructor(){}
 
  submit(formItems) {
    console.log("in submit()");
    //console.log(formItems);
    //return this.httpClient.get<any[]>(`${this.adminURL}`);
    //window.location.href = this.adminURL;
   // this.httpClient.post(this.adminURL, formItems);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.httpClient.post(this.port, formItems, {headers : headers})
      .subscribe(res => {
         console.log('inside postmehtod of sub.function');//only objects
      })
  }
}
