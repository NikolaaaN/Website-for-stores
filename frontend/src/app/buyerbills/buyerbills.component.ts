import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from '../models/bill';
import { Bills } from '../models/bills';
import { CustomerserviceService } from '../services/customerservice.service';

@Component({
  selector: 'app-buyerbills',
  templateUrl: './buyerbills.component.html',
  styleUrls: ['./buyerbills.component.css']
})
export class BuyerbillsComponent implements OnInit {

  constructor(private router: Router, private customerService: CustomerserviceService) { }

  ngOnInit(): void {
  }

  searchParam: string
  allBills: Array<Bills> = []
  detailsOn: boolean = false
  selectedBill: Bills

  store(){
    this.router.navigate(['buyer'])
  }
  bills(){
    this.router.navigate(['buyerbills'])
  }
  changePassword(){
    this.router.navigate(['changepasswords'])
  }

  search(){
    this.customerService.getAllBills(this.searchParam).subscribe((bills: Array<Bills>) => {
      this.allBills = bills
    })
  }

  details(bill){
    this.detailsOn = true;
    this.selectedBill = bill
  }

}
