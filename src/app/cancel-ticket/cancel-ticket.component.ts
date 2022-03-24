import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cancel-ticket',
  templateUrl: './cancel-ticket.component.html',
  styleUrls: ['./cancel-ticket.component.css']
})
export class CancelTicketComponent implements OnInit {

  constructor(private userService: UserserviceService) { }

  ngOnInit() {
  }
  cancelTicketFormMethod(cancelTicketForm: NgForm) {
    // this.userService.cancelTicket(cancelTicketForm).subscribe(tickets1 => {
    //   if (tickets1.message === 'Success') {
    //     console.log(tickets1);
    //     alert('Ticket Deleted Successfully');
    //     cancelTicketForm.reset();
    //   } else {
    //     console.log(tickets1);
    //     alert('Failed To Delete Ticket not exist');
    //   }
    // });
  }


}
