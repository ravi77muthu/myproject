import { Injectable, ErrorHandler } from '@angular/core';
import { Observable, of, from } from 'rxjs';

import {Student} from './student/student';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StuServeService {
  
  private mockURL: string = 'assets/mockup.json'  

  constructor(private http:HttpClient) { }


getStudents():Observable<Student[]>{
    return this.http.get<Student[]>(this.mockURL)
      .pipe(
        catchError(this.errorHandler)
      )
}

errorHandler(error: HttpErrorResponse){
  return throwError(error.message || 'Server Error');
  
}

addStudent(std: Student): Observable<Student> {
  return of(std);
}
}
