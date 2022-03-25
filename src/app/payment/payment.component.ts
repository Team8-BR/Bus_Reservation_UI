import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router, private userService: UserserviceService) { }

  ngOnInit(): void {
  }
  
  makePayment(createBus: NgForm) {

    this.router.navigateByUrl('/viewTicket')
    
  }

}
