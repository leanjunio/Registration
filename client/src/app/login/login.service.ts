import { Injectable } from '@angular/core';
import { Administrator } from '../administrator';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  admins: Administrator[];
  constructor(private administrator: Administrator) { 

   }
  authenticate(email, name){
    //console.log(email + " " + name);
    
    //TODO: validate email and name in administrator database
  }

}
