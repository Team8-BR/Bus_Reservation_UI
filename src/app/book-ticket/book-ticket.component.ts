import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  constructor(private usrService: UserserviceService) { }
  ngOnInit() {
  }
  bookTicket(bookTicketForm: NgForm) {
  
  }
}
