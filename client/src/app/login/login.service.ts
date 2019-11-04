import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  authenticate(email, name){
    console.log(email + " " + name);
  }

}
