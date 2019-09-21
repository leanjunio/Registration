import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from './register.service';
import { Administrator } from '../administrator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  administrator: Administrator;
  
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.administrator = new Administrator('', '');
  }

  onSubmit(f: NgForm) {
    this.registerService.addAdmin(this.administrator)
      .subscribe(admin => {
        // NOTE: admin contains whatever is returned by the backend route its creating a request to
        alert(`The admin with email: ${admin.email} has been saved.`);
        f.resetForm();
      });
  }
}
