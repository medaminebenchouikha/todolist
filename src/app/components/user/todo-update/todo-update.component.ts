import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {

  


  formaupdatetodo:FormGroup;


  constructor(
    private formBuilder:FormBuilder,
    private todoService:TodoService,
    private router:ActivatedRoute) { }

  ngOnInit() {


    this.formaupdatetodo=this.formBuilder.group({

      description:new FormControl(null,[Validators.required,Validators.minLength(5)])


    })



  }


  get description(){return this.formaupdatetodo.get('description')}
  


  updateTodo(){
    let todo=this.formaupdatetodo.value;
    let id=this.router.snapshot.paramMap.get('id');
    this.todoService.updateTodo(todo,id).subscribe(
      (result)=>{
        console.log(result);
      },
      (error)=>{
        console.log(error);
      }
    );
    console.log(this.formaupdatetodo.value);



  }


}
