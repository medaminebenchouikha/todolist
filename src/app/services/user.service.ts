import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser(idUser){
    let resultFromWs= this.http.get<any>("http://localhost:3000/user/profil/"+idUser);
    return resultFromWs;
  }

  updateUser(user){
    return this.http.post<any>("http://localhost:3000/user/update",user);
  }

  registerUser(user:User){
    let resultFromWs = this.http.post<any>("http://localhost:3000/user/register",user);
    return resultFromWs;
  }
  
  loginUser(user:User){
    let resultFromWs = this.http.post<any>("http://localhost:3000/user/login",user);
    return resultFromWs;
  }
}
