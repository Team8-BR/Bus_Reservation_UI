import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public myRouter: Router) { }

  ngOnInit(): void {
  }

  gotoHome() {
    this.myRouter.navigateByUrl('/')
  }
}