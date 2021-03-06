import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {
  createBus: any;

  constructor(private usrService: UserserviceService) { }

  ngOnInit() {
  }
  addBus(createBus: NgForm) {
    this.usrService.addBus(createBus.value).subscribe(bus => {
      if (bus != null) {
        console.log(bus);
        alert('Bus Added Successfully');
        createBus.reset();
      } else {
        console.log(bus);
        alert('Failed To AddBus');
        createBus.reset();
      }
    }
    );
}
}