import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { Administrator } from '../administrator';


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

    
    constructor() { }
  
    ngOnInit() {
      this.administrator = new Administrator('', '');
    }
  
    onSubmit(f: NgForm) {
      console.log("login hit");

    }
  }
  


