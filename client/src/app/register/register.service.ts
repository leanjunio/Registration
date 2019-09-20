import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

 isValid = null;
 port ='http://localhost:8080/api/user/signup';
 constructor(private httpClient: HttpClient) { }
 
 validate(formValues){
   var invalidEmail = formValues.email.indexOf("@") == -1 || formValues.email.indexOf(".") == -1; 
   var invalidPw = formValues.password.length < 6;
   (!invalidEmail && !invalidPw) ? this.isValid = true : this.isValid = false;
   return this.isValid;  
 }

//  onSubmit(formValues) {
//    if(this.validate(formValues)) {
//      let headers = new HttpHeaders();
//      headers.append('Content-Type', 'application/json');
//      this.httpClient.post(this.port, formValues, {headers : headers}).subscribe(res => {});
//      this.isValid = true;
//   }
// }

onSubmit(formValues): Observable<any> {
  if(this.validate(formValues)) {
    this.isValid = true;
    return this.httpClient.post<any>(this.port, formValues, this.httpOptions)
      .pipe( // catchError(this.handleError('addAdmin', formValues))
    );
  }
 }
}
