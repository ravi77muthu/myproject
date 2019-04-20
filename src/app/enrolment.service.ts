import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { User } from './regform/user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrolmentService {
  
  _URL = 'http://localhost:3000/enroll';
  constructor(private _http:HttpClient) { }

  enroll(user : User){
   return this._http.post<any>(this._URL, user)
          .pipe(catchError(this.errorHndler))
  }
  errorHndler(error:HttpErrorResponse){
    return throwError(error);
  }
}
