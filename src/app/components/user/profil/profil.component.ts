import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  url = "./../../../../assets/img/undraw_profile_pic_ic5t.svg";

  profilForm: FormGroup;
  uploadedFile: File;
  user: any;

  nameUser: string;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService, private toaster: ToastrService, private router: Router) { }

  ngOnInit() {
    this.profilForm = this.formBuilder.group({
      id: new FormControl(),
      firstname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z ]*$/)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z ]*$/)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{8}(?:-[0-9]{8})?$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    const helper = new JwtHelperService();
    let token = localStorage.getItem('token');
    const decodToken = helper.decodeToken(token);
    let idUser = decodToken.idUser;
    this.userService.getUser(idUser).subscribe(
      (result) => {
        /* this.user = new User(null,result.firstname,result.lastname,result.phone,result.email);
  console.log(this.user);*/

        console.log(result.phone);
        this.nameUser = result.firstname + " " + result.lastname;
        this.profilForm.patchValue({
          id: result._id,
          firstname: result.firstname,
          lastname: result.lastname,
          phone: result.phone,
          email: result.email
        });
        if (result.photo) {
          this.url = "http://localhost:3000/" + result.photo;
        }

      },
      (error) => {
        console.log(error);
      }
    )

  }

  selectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.url = (event.target as FileReader).result.toString();
      }
      this.uploadedFile = event.target.files[0];
    }
  }

  resetFile() {
    this.url = "./../../../../assets/img/undraw_profile_pic_ic5t.svg";
  }

  update() {
    let data = this.profilForm.value;
    let formData = new FormData();
    console.log(JSON.stringify(data));
    formData.append("data", JSON.stringify(data));
    if (this.uploadedFile)
      formData.append("image", this.uploadedFile, this.uploadedFile.name);
    this.userService.updateUser(formData).subscribe(
      (result) => {
        console.log(result);
        this.toaster.success(result.message);
        this.router.navigate(['/user/todo-list']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
