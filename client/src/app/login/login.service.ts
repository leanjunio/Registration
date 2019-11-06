import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { 

   }
  authenticate(email, password){
    console.log(email + " " + password);
    
    //TODO: validate email and name in administrator database
  }

 

}
