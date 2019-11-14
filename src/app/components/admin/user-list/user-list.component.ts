import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: any;
  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    const helper = new JwtHelperService();
    let token = localStorage.getItem("token");
    const decodeToken = helper.decodeToken(token);
    let roleUser = decodeToken.roleUser;
    this.adminService.listUser(roleUser).subscribe(
      (result) => {
        console.log(result);
        this.userList = result;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  activateUser(index, idUser) {
    this.adminService.activateUser(idUser).subscribe(
      (result) => {
        this.userList[index].etat = 1;
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );

  }
  desactivateUser(index, idUser) {
    this.adminService.desactivateUser(idUser).subscribe(
      (result) => {
        this.userList[index].etat = 0;
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    )

  }

  changeState(index, idUser, etat) {
    if (etat == 1)
      this.desactivateUser(index, idUser);
    else
      this.activateUser(index, idUser);
  }
  
  removeUser(index, idUser) {
    this.adminService.removeUser(idUser).subscribe(
      (result) => {
        console.log(result);
        this.userList.splice(index, 1);
      },
      (error) => {
        console.log(error);
      }
    )

  }

}
