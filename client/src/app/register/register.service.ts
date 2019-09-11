import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  adminURL: string = 'https://glacial-shelf-53509.herokuapp.com/';
  constructor(private httpClient: HttpClient) { }

  submit() {
    return this.httpClient.get<administrators[]>(`${this.adminURL}/administrators`);
  }
}
