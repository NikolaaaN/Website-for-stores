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
    objects: ["", ""]
  }

  store(){
    this.router.navigate(['buyer'])
  }
  bills(){

  }

  selected(){
    this.selectedCompany = this.companies.find(company => this.selectedCompanyName == company.companyName)
    this.selectedCompany.goods.forEach(good => {

      //magacini i objekti treba da budu niz kod robe

      // this.companyService.getAllGoodsByCode(code).subscribe((goods: Array<Goods>) => {

      // }) 

      this.tableRow.name = good.manufacturer
      this.tableRow.price = good.purchasePrice
      this.tableRow.object = good.storage
      this.tableRows.push(this.tableRow)
      this.tableRow= new Object()
    });
    

  }

}
