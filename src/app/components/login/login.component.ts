import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  siteKey = "6LeZHMAUAAAAAK5RQ1mD0qsOBDCD7tHWCM_qWw4_";
  lang = "fr";


  constructor(private fb: FormBuilder,
    private userService: UserService,
    private toaster: ToastrService,
    private router: Router) {

  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ])
      //,, recaptcha: ['', Validators.required]

    })
  }

  login() {
    console.log(this.loginForm.value);
    let data = this.loginForm.value;
    let user = new User(null, null, null, null, data.email, data.password);
    this.userService.loginUser(user).subscribe((result) => {
      console.log(result.token);
      localStorage.setItem("token", result.token);
      const helper = new JwtHelperService();
      let decodToken = helper.decodeToken(result.token);
      (decodToken.roleUser == 'admin') ? this.router.navigate(['/admin/user-list']) : this.router.navigate(['/user/todo-list']);
      this.toaster.success("User connected!");
    }, (error) => {
      console.log(error.error.message);
      this.toaster.error(error.error.message);
    })
  }

}
