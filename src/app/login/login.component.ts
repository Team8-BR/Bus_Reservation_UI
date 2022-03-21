// import { UsersService } from './../Services/users.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

msg = ''
email =''
password =''
  constructor(public myRouter : Router) { }

  ngOnInit() {
  }
  goToLogin() {
    this.myRouter.navigateByUrl('/Submit')
}
 doRegister(data:NgForm)
  {

  }

 doLogin() {

  this.myRouter.navigateByUrl('/dashboard')
 }

  gotoSignup() {
    this.myRouter.navigateByUrl('/register')
  }
  gotoForgetpassword(){
    this.myRouter.navigateByUrl('/Forgetpassword')
  }
  gotohome(){
    this.myRouter.navigateByUrl('/')
  }
}

