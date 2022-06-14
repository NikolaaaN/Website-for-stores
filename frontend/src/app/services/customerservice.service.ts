import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http: HttpClient) { }

  pushBill(brLK, bill){
    const data = {
      brLK: brLK,
      bill: bill
    }

    return this.http.post('http://localhost:4000/customer/pushbill', data)
  }
}
