import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() administrators;
  @Output() submit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("form submitted");
    // return this.httpClient.get<administrators[]>(`${this.adminURL}/administrators`);
    this.submit.emit(this.adminURL);
  }
}
