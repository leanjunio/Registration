import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
 port ='http://localhost:8080/api/user/signup';
 constructor(private httpClient: HttpClient) { }
 
 onSubmit(formValues) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.httpClient.post(this.port, formValues, {headers : headers});
  }
}
