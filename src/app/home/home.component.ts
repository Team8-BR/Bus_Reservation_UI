import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from './bus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public myRouter: Router, public busSer: BusService) { }

  ngOnInit(): void {
  }

  goToLogin() {
      this.myRouter.navigateByUrl('/login')
  }

  getBus () {
   const availableBus =  this.busSer.getBus()
  }
}
