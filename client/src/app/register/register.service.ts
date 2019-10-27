import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { Administrator } from "../administrator";
import { MessageService } from '../message.service';

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  url = "http://localhost:8080/api/user/signup";
  
  constructor(private http: HttpClient, private messageService: MessageService) {}

  // SAVE METHODS
  addAdmin (administrator: Administrator): Observable<Administrator> {
    return this.http.post<Administrator>(this.url, administrator, this.httpOptions)
      .pipe(
        tap((newAdmin: Administrator) => this.log(`Added admin: ${newAdmin.email}`)),   // newAdmin.administrator contains the ObjectId generated in MongoDB
        catchError(this.handleError<Administrator>('addAdmin'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a RegisterService message with the MessageService */
  // NOTE: This is for a future feature
  private log(message: string) {
    console.log(`${message}`);
  }
}
