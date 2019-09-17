import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RegisterService } from './register.service';
import { AdministratorsRaw } from '../administratorsRaw';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form;
  //@Input() administrators;
  //@Output() submit = new EventEmitter();
  //register: AdministratorsRaw;
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        email: new FormControl(''),
        password: new FormControl(''),
      });
  }
  onSubmit(formItems) {
    //console.log(formItems);
    
 
  }

}
