import { Component, OnInit } from '@angular/core';

import { TodoService } from 'src/app/services/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList2 = [
    {
      description: "Refaire pour angular",
      addedDate: new Date(),
      enddDate: new Date()
    },
    {
      description: "Refaire pour angular 2",
      addedDate: new Date(),
      enddDate: new Date()
    }

  ];


  todoList = [
    {
      description: "Refaire pour angular",
      addedDate: new Date()
    },
    {
      description: "Refaire pour angular 2",
      addedDate: new Date()
    },
    {
      description: "Refaire pour angular 3",
      addedDate: new Date()
    }
  ]
  constructor(
    private todoService:TodoService,
    private toastr:ToastrService
    ) { }

  ngOnInit() {
/*
    this.todoService.listTodo().subscribe(
    (result)=>{
      console.log(result);
     // this.todoList=result;
    },
    (error)=>{
      console.log(error);
    });
    */
  }

  deleteTodo(index: number,id:any) {
    this.todoService.deleteTodo(id).subscribe(
      (result)=>{
        console.log(result);
        this.toastr.success("Todo deleted !");
        this.todoList.splice(index, 1);
      },
      (error)=>{
        console.log(error);
      }
    )
    
  }


  deleteTodo2(index: number) {
    this.todoList2.splice(index, 1);
  }

  addTodo2(index: number, todo) {
    this.todoList.splice(index, 1);
    todo.enddDate = new Date();

    this.todoList2.push(todo);


  }

}
