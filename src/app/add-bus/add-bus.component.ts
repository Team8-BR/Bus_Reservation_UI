import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {

  constructor(private usrService: UserserviceService) { }

  ngOnInit() {
  }
  addBus(createBus: NgForm) {

  }

}
