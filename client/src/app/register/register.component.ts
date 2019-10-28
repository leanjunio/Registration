import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from './register.service';
import { Administrator } from '../administrator';
// import { error } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  administrator: Administrator;
  receivedAdmin: Administrator;
  success = false;
  fail = false;
  errorMessage = ''
  
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.administrator = new Administrator('', '');
  }

  // NOTE: admin contains whatever is returned by the backend route its creating a request to
  onSubmit(f: NgForm) {
    this.registerService
      .addAdmin(this.administrator)
      .subscribe(
        (admin: Administrator) => {
          this.success = true;
          this.receivedAdmin = admin;
          f.resetForm();
        },
        err => {
          this.fail = true;
          this.errorMessage = err.error.message;
          f.resetForm();
        }
      );
  }
}
