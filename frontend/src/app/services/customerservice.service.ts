import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerserviceService {
  constructor(private http: HttpClient) {}

  pushBill(type, brLK, bill, company, store, finalPrice, taxPrice) {
    const data = {
      brLK: brLK,
      bill: bill,
      company: company,
      store: store,
      finalPrice: finalPrice,
      taxPrice: taxPrice,
      type: type,
    };

    return this.http.post('http://localhost:4000/customer/pushbill', data);
  }

  getAllBills(searchParam) {
    const data = {
      searchParam: searchParam,
    };
    return this.http.post('http://localhost:4000/customer/getbills', data);
  }

  getCustomer(username) {
    const data = {
      username: username,
    };
    return this.http.post('http://localhost:4000/customer/getcustomer', data);
  }
}
