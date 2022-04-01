import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  constructor(private router: Router, private userService: UserserviceService) { }
  ngOnInit() {
  }
  bookTicket(bookTicketForm: NgForm) {
    this.userService.bookTicket(bookTicketForm.value).subscribe(tickets => {
      if (tickets != null) {
        console.log(tickets);
        alert('Ticket Booked Successfully please note id to alter ticket' + `${tickets.ticket.bookingId}` );
        bookTicketForm.reset();
      } else {
        console.log(tickets);
        alert('Failed To Book Ticket');
        bookTicketForm.reset();
      }
    }
    );
    this.router.navigateByUrl('/makepayment')
    
  }
}
