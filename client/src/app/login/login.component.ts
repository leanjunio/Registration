import { Component, OnInit } from '@angular/core';
import { Administrator } from '../administrator';
import { NgForm } from '@angular/forms';

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
    this.administrator = new Administrator('','');
  }
  
  onSubmit(f: NgForm) {
    
  }
}
