import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RegisterService } from './register.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form;
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        email: new FormControl(''),
        password: new FormControl(''),
      });
  }
  onSubmit(formItems) {
   console.log("in onSubmit");
   this.registerService.submit(formItems);  
  }

}
