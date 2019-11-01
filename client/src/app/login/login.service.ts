import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Administrator } from '../administrator';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:8080/api/user/login';
  constructor(private http: HttpClient) { }

  /**
   * Login Service for attempting to Authenticate given data
   */
  login(administrator: Administrator): Observable<Administrator> {
    
  }
}
