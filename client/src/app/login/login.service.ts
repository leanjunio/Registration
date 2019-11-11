import { Injectable } from '@angular/core';
import { Login } from '../login';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators/catchError'; 

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  url = 'https://glacial-shelf-53509.herokuapp.com/login';
  
  constructor(private http: HttpClient) { }

 /** POST: add a new login to the /login path */
addLogin (login: Login): Observable<Login> {
  return this.http.post<Login>(this.url, login, this.httpOptions)
    .pipe(
      catchError(this.handleError('addLogin', login))
    );
}

authenticate(email, password){
  console.log(email + " " + password);

  //TODO: validate email and name in administrator database
}

}
