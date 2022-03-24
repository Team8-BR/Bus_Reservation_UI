import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-check-avaliability',
  templateUrl: './check-avaliability.component.html',
  styleUrls: ['./check-avaliability.component.css']
})
export class CheckAvaliabilityComponent implements OnInit {
  avails: any[] = [];
  check: any = null;
  
  constructor(private userService: UserserviceService) { }

  ngOnInit() {
  }
  checkAvail(checkAvailForm : any) {
    // this.userService.chechAvail(checkAvailForm.value).subscribe(data => {

    //   if (data.availList != null) {
    //     this.avails = data.availList;
    //     alert('Availability Check Successfully');
    //     this.check = true;
    //     this.userService.avail = true;
    //     checkAvailForm.reset();
    //   } else {
    //     console.log(data);
    //     alert('No Availability on that day');
    //     checkAvailForm.reset();
    //     this.check = false;
    //   }
    // });
  }
}
