import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoListComponent } from './components/user/todo-list/todo-list.component';
import { TodoAddComponent } from './components/user/todo-add/todo-add.component';
import { TodoUpdateComponent } from './components/user/todo-update/todo-update.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxCaptchaModule } from 'ngx-captcha';
import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule
} from 'ngx-toastr';
import { TodoService } from './services/todo.service';
import { UserListComponent } from './admin/user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileSelectDirective } from 'ng2-file-upload';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoUpdateComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastNoAnimationModule.forRoot(),
    NgxCaptchaModule
    ],
  providers: [
    UserService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
