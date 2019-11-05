import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean;
  isAdmin:boolean = false;
  constructor(private router:Router) { }

  ngOnInit() {     
    let token=localStorage.getItem('token');      
    if(token)
    {
    const helper=new JwtHelperService();
    const decodToken=helper.decodeToken(token);
    this.isAdmin=(decodToken.roleUser=='admin')?true:false; 
    }  
    this.isLogin=(token)?true:false; 
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    this.isLogin=false;
    this.isAdmin=false;
  }

}
