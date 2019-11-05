import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { ToastrService } from 'ngx-toastr';

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
    private router:ActivatedRoute,
    private route:Router,
    private toastr:ToastrService) { }

  ngOnInit() {


    this.formaupdatetodo=this.formBuilder.group({

      description:new FormControl(null,[Validators.required,Validators.minLength(5)])


    })



  }


  get description(){return this.formaupdatetodo.get('description')}
  
  updateTodo(){
    let data=this.formaupdatetodo.value;
    let todo= new Todo(null,data.description,null);
    let id=this.router.snapshot.paramMap.get('id');
    this.todoService.updateTodo(todo,id).subscribe(
      (result)=>{
        console.log(result);
        this.toastr.success('Update Todo success!');
        this.route.navigate(['/user/todo-list']);
      },
      (error)=>{
        console.log(error);
        this.toastr.error('Update error!');
      }
    );
    console.log(this.formaupdatetodo.value);



  }


}
