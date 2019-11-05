import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodoListComponent } from './components/user/todo-list/todo-list.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TodoAddComponent } from './components/user/todo-add/todo-add.component';
import { TodoUpdateComponent } from './components/user/todo-update/todo-update.component';
import { UserGuard } from './guards/user.guard';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AdminGuard } from './guards/admin.guard';


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
      component:TodoListComponent,
      canActivate:[UserGuard]
    },
    {
      path:'user/todo-add',
      component:TodoAddComponent,
      canActivate:[UserGuard]
    },
    {
      path:'user/todo-update/:id',
      component:TodoUpdateComponent,
      canActivate:[UserGuard]
    },
    {
      path:'admin/user-list',
      component:UserListComponent,
      canActivate:[AdminGuard]
    },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
