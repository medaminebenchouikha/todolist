import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  listTodo(){
    let resultFromWs = this.http.get<any>("http://localhost:3000/todo/list",null);
    return resultFromWs;
  }

  updateTodo(todo:Todo,id:any){
    let resultFromWs = this.http.patch<any>("http://localhost:3000/todo/update/"+id,todo);
    return resultFromWs;
  }

  deleteTodo(id:any){
    return this.http.delete<any>("http://localhost:3000/todo/delete/"+id);
  }

  addTodo(todo:Todo){
    let resultFromWs = this.http.put<any>("http://localhost:3000/todo/add",todo);
    return resultFromWs;
  }
}
