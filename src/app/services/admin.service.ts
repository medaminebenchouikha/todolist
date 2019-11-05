import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  listUser(role){
    let resultFromWs = this.http.get('http://localhost:3000/user/list/'+role);
    return resultFromWs;
  }

  activateUser(idUser){
    return this.http.post('http://localhost:3000/user/activateUser/'+idUser,null);
  }

  desactivateUser(idUser){
    return this.http.post('http://localhost:3000/user/desactivateUser/'+idUser,null);
  }

  removeUser(idUser){
    return this.http.delete('http://localhost:3000/user/delete/'+idUser);
  }
  

}
