import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 userUrl = 'http://localhost:1902/api/Customer/InsertData';
 addBusUrl='http://localhost:1902/api/BusDetails/InsertData';
 updateBusUrl='http://localhost:1902/api/BusSchedule/InsertData';
 deleteBusUrl='http://localhost:1902/api/BusDetails/id';
 showallBusUrl='http://localhost:1902/api/BusSchedule/allDetails';
 setAvalibilityUrl='http://localhost:1902/api/BusSchedule/allDetails';
 bookTicketUrl='http://localhost:1902/api/Ticket Booking/InsertData';
 cancelTicketUrl='http://localhost:1902/api/TicketCancellation/id';
 viewTickersUrl='http://localhost:1902/api/TicketBooking/Id';
 paymentUrl='http://localhost:1902/api/Payments/InsertData';
 constructor(private http: HttpClient) { }
 
 register(data: any) {
   console.log(data);
   return this.http.post<any>(`${this.userUrl}`, data);
 }
 addBus(data: any) {
  return this.http.post<any>(`${this.userUrl}/addBus`, data);
 }
 updateBus(data: any) {
  return this.http.put(`${this.userUrl}/updateBus`, data);
}
deleteBus(data: any) {
  return this.http.delete(`${this.userUrl}/deleteBus/${data}`);
}
showAllBus() {
  return this.http.get<any>(`${this.userUrl}/getAllBus`);
}
 setAvaliability(data: any) {
  console.log(data);
  return this.http.post(`${this.userUrl}/setAvaliability`, data);
}
bookTicket(data: any) {
  return this.http.post<any>(`${this.userUrl}/bookTicket`, data);
}
cancelTicket(data: { bookingId: any; }) {
  return this.http.delete<any>(`${this.userUrl}/deleteTicket/${data.bookingId}`);
}
viewTicket(data: { bookingId: any; }) {
  return this.http.get<any>(`${this.userUrl}/getTicket/${data.bookingId}`);
}
makePayment(data: any) {
  return this.http.put(`${this.userUrl}/payment`, data);
}
}