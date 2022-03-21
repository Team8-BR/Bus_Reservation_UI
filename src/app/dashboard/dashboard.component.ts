import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  page: boolean =  false;
  constructor(public myRouter:Router) { }

  ngOnInit(): void {
  }
gotohome(){
  this.myRouter.navigateByUrl('/')
}
mydashboard(){
  this.page= !this.page;
}
}
