import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean;
  constructor(private router:Router) { }

  ngOnInit() {
    this.isLogin=localStorage.getItem('token')?true:false;   
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
