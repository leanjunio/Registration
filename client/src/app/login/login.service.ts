import { Injectable } from '@angular/core';
import { Login } from '../login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'https://glacial-shelf-53509.herokuapp.com/login';
  constructor() { 

   }
  authenticate(email, password){
    console.log(email + " " + password);
    
    //TODO: validate email and name in administrator database
  }

 /** POST: add a new hero to the database */
addLogin (login: Login): Observable<Login> {
  return this.http.post<Login>(this.url, login, httpOptions)
    .pipe(
      catchError(this.handleError('addLogin', login))
    );
}

}
