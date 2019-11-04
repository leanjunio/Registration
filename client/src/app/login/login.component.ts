import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Administrator } from '../administrator';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    administrator: Administrator;
    receivedAdmin: Administrator;
    success = false;
    fail = false;
    errorMessage = ''

    
    constructor(private loginService: LoginService) { }
  
    ngOnInit() {
      this.administrator = new Administrator('', '');
    }
  
    onSubmit(f: NgForm) {
      this.loginService.authenticate(f.value.email, f.value.password);
    }
  }
  


