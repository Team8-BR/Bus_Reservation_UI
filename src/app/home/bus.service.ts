import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(public http: HttpClient) { }

  getBus() {
    this.http.get('/getBus');
  }

}
