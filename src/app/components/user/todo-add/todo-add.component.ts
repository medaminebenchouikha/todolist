import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from "@auth0/angular-jwt";


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
    const helper = new JwtHelperService();
    let token = localStorage.getItem("token");
    const decodedToken = helper.decodeToken(token);
    let idUser=decodedToken.idUser;
    let todo= new Todo(null,data.description,idUser);
    this.todoService.addTodo(todo).subscribe((result)=>{
      console.log(result);
      this.toastr.success(result.message);
      this.router.navigate(['/user/todo-list']);
    },(error)=>{
      console.log(error);
      this.toastr.show('Error!');
    })

    console.log(this.formaddtodo.value);



  }

}
