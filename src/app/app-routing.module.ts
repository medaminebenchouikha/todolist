import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodoListComponent } from './components/user/todo-list/todo-list.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TodoAddComponent } from './components/user/todo-add/todo-add.component';
import { TodoUpdateComponent } from './components/user/todo-update/todo-update.component';


const routes: Routes = [
  //homeroute
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
      path:'user/todo-list',
      component:TodoListComponent
    },
    {
      path:'user/todo-add',
      component:TodoAddComponent
    },
    {
      path:'user/todo-update',
      component:TodoUpdateComponent
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
