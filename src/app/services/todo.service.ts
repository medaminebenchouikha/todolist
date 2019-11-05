import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  listTodo(idUser){
    let resultFromWs = this.http.get<any>("http://localhost:3000/todo/list/"+idUser);
    return resultFromWs;
  }

  updateTodo(todo:Todo,id){
    let resultFromWs = this.http.patch<any>("http://localhost:3000/todo/update/"+id,todo);
    
    return resultFromWs;
  }

  updatedone(id){
    let resultFromWs = this.http.patch<any>("http://localhost:3000/todo/updatedone/"+id,null);
    
    return resultFromWs;
  }

  deleteTodo(id){
    return this.http.delete<any>("http://localhost:3000/todo/delete/"+id);
  }

  addTodo(todo:Todo){
    let resultFromWs = this.http.post<any>("http://localhost:3000/todo/add",todo);
    return resultFromWs;
  }
}
