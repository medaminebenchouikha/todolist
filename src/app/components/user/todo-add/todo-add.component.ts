import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {


  formaddtodo:FormGroup;


  constructor(private formBuilder:FormBuilder,
    private todoService:TodoService,
    private router:Router,
    private toastr:ToastrService) { }

  ngOnInit() {


    this.formaddtodo=this.formBuilder.group({

      description:new FormControl(null,[Validators.required,Validators.minLength(5)])


    })



  }


  get description(){return this.formaddtodo.get('description')}


  addTodo(){

    let data = this.formaddtodo.value;
    let todo= new Todo(null,data.description);
    this.todoService.addTodo(todo).subscribe((result)=>{
      console.log(result);
      this.toastr.success('Todo added!');
      this.router.navigate(['/user/todo-list']);
    },(error)=>{
      console.log(error);
      this.toastr.error('Error!')
    })

    console.log(this.formaddtodo.value);



  }

}
