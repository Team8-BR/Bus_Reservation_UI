import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 userUrl = 'http://localhost:1902/api/Customer/InsertData';
 constructor(private http: HttpClient) { }
 register(data: any) {
   console.log(data);
   return this.http.post<any>(`${this.userUrl}/add`, data);
 }
}
