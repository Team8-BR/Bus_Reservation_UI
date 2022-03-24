import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent implements OnInit {
  name = 'owner';
  constructor(private userService: UserserviceService) { }

  ngOnInit() {
  }
  owner(addOwner: NgForm) {

    this.userService.register(addOwner.value).subscribe(data => {
      if (data != null) {
        console.log(data);
        alert('Owner Added Successfully');
        addOwner.reset();
      } else {
        console.log(data);
        // console.log("NO Output");
        alert('ENTER CORRECT CREDENTAILS');
        addOwner.reset();
      }

    });
  }

}
