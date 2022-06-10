import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private companyService: CompanyService, private router: Router) { }

  menuLists= ['opste informacije', 'detalji']
  selected = 'opste informacije'

  ngOnInit(): void {
    this.companyService.getCompanyDetails(sessionStorage.getItem('username')).subscribe( (company: Company) => {
      console.log(company)
      this.category = company.category
      this.code = company.code
      this.pdv = company.pdv
      this.bankAccount = company.bankAccount
      this.noOfStorages = company.noOfStorages
      this.noOfCashRegisters = company.noOfCashRegisters
    })
  }

  category: string
  code: string
  pdv: boolean
  bankAccount: string
  noOfStorages: number
  noOfCashRegisters: number

  details(){
    
  }
  update(){
    let username= sessionStorage.getItem('username')
    this.companyService.updateGeneralDetails(this.category, this.code, this.pdv, this.bankAccount, this.noOfCashRegisters, this.noOfStorages, username).subscribe((message: string) => {
      console.log(message)

    })
  }

  setSelectedItem(item){
    this.selected = item
  }

  orderers(){
    this.router.navigate(['company/orderers'])
  }

}
