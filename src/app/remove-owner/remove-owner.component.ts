import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-remove-owner',
  templateUrl: './remove-owner.component.html',
  styleUrls: ['./remove-owner.component.css']
})
export class RemoveOwnerComponent implements OnInit {

  constructor(private userService: UserserviceService) { this.getAllOwners(); }
  getAllOwners() {
    throw new Error('Method not implemented.');
  }
  owners: any[] = [];
  ngOnInit() {
  }
  remove(id: NgForm) {

  }

}
