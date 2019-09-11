import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() administrators;
  @Output() submit = new EventEmitter();

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  onSubmit(){
    //console.log("form submitted");
    this.registerService.submit();
  }
}
