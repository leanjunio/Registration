import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("form submitted");
    return this.httpClient.get<administrators[]>(`${this.adminURL}/administrators`);
  }
}
