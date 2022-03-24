import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, ) { }

  ngOnInit() {
  }
  get isAdminLogin() {
    return
    // return this.loginService.isAdminLogin();
  }
  get isOwnerLogin() {
    return
    // return this.loginService.isOwnerLogin();
  }
  get isCustomerLogin() {
    return
    // return this.loginService.isCustomerLogin();
  }
  get getavalia() {
    return
  //  return this.userService.avail;
  }
  logout() {
  //   this.loginService.isAdminLoggedIn = false;
  //   this.loginService.isOwnerLoggedIn = false;
  //   this.loginService.isCustomerLoggedIn = false;
  //   this.router.navigateByUrl('/');
  }
  register(){
    this.router.navigateByUrl("/register")
  }
  login(){
    this.router.navigateByUrl("/login")
  }

}

