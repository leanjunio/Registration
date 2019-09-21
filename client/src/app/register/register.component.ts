import { Component, OnInit } from '@angular/core';
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

  onSubmit() {
    console.log(this.administrator);

  }
}
