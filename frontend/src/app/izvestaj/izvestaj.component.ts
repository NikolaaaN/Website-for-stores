import { Component, OnInit } from '@angular/core';
import { Bills } from '../models/bills';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-izvestaj',
  templateUrl: './izvestaj.component.html',
  styleUrls: ['./izvestaj.component.css']
})
export class IzvestajComponent implements OnInit {

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {

    this.companyService.getAllBills().subscribe((bills: Array<Bills>) => {
      this.bills = bills
      console.log(bills)
      let today= new Date()
      
      bills.forEach(element => {
        let date =  new Date(element.date)
        if (typeof(element.finalPrice) == typeof(1) && typeof(element.taxPrice) == typeof(1) && today.getDate() == date.getDate() ){
          this.totalValue += element.finalPrice
          this.totalTax += element.taxPrice
        }
      });
    })
  }

  bills: Array<Bills> = []
  totalValue: number = 0
  totalTax: number = 0

}
