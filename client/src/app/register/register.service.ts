import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Administrator } from "../administrator";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  isValid = null;
  url = "http://localhost:8080/api/user/signup";
  
  constructor(private http: HttpClient) {}

  validate(formValues) {
    var invalidEmail =
      formValues.email.indexOf("@") == -1 ||
      formValues.email.indexOf(".") == -1;
    var invalidPw = formValues.password.length < 6;
    !invalidEmail && !invalidPw
      ? (this.isValid = true)
      : (this.isValid = false);
    return this.isValid;
  }

  // SAVE METHODS
  addAdministrator(administrator: Administrator): Observable<Administrator> {
    return this.http.post<Administrator>(this.url, administrator, this.httpOptions)
  }
}
