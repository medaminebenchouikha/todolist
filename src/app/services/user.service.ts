import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  registerUser(user:User){
    let resultFromWs = this.http.post<any>("http://localhost:3000/user/register",user);
    return resultFromWs;
  }
  
  loginUser(user:User){
    let resultFromWs = this.http.post<any>("http://localhost:3000/user/login",user);
    return resultFromWs;
  }
}
