import { Injectable } from '@angular/core';

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


}
