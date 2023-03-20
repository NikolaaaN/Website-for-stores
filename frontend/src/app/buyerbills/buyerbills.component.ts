import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from '../models/bill';
import { Customer } from '../models/customer';
import { Bills } from '../models/bills';
import { CustomerserviceService } from '../services/customerservice.service';

@Component({
  selector: 'app-buyerbills',
  templateUrl: './buyerbills.component.html',
  styleUrls: ['./buyerbills.component.css'],
})
export class BuyerbillsComponent implements OnInit {
  constructor(
    private router: Router,
    private customerService: CustomerserviceService
  ) {}

  ngOnInit(): void {
    this.customerService
      .getCustomer(sessionStorage.getItem('username'))
      .subscribe((customer: Customer) => {
        this.allBills = customer.bills;
      });
  }

  searchParam: string;
  allBills: Array<Bills> = [];
  detailsOn: boolean = false;
  selectedBill: Bills;

  store() {
    this.router.navigate(['buyer']);
  }
  bills() {
    this.router.navigate(['buyerbills']);
  }
  changePassword() {
    this.router.navigate(['changepasswords']);
  }

  search() {}

  details(bill) {
    this.detailsOn = true;
    this.selectedBill = bill;
  }
}
