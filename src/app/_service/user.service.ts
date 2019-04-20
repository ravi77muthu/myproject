import { Injectable } from '@angular/core';
import { User } from '../_models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<User[]>(`${config.apiUrl}/users`);
  }
}
