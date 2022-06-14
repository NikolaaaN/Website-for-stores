import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../models/company';
import { Goods } from '../models/goods';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  constructor(private router: Router,private companyService: CompanyService) {
    this.companyService.getAllCompanies().subscribe((companies: Array<Company>) => {
      this.companies = companies
    })
   }

  ngOnInit(): void {
  }

  companies: Array<Company>
  selectedCompanyName: string
  selectedCompany : Company = new Company()

  tableRows: any = []

  tableRow: any = {
    name: "",
    price : 0,
    objects: ""
  }

  store(){
    this.router.navigate(['buyer'])
  }
  bills(){

  }

  selected(){
    this.selectedCompany = this.companies.find(company => this.selectedCompanyName == company.companyName)
    this.selectedCompany.goods.forEach(good => {

      this.tableRow.name = good.manufacturer
      
      let names= ""
      let minPrice=0
      if (good.storages){
        console.log(good.storages)
        minPrice = good.storages[0].purchasePrice
        good.storages.forEach(storage => {
         if (storage.purchasePrice< minPrice)
          minPrice = storage.purchasePrice
        names += storage.name + ' '
        });
      }
      this.tableRow.price =minPrice
      this.tableRow.object = names
      this.tableRows.push(this.tableRow)
      this.tableRow= new Object()
    });
    

  }

}
