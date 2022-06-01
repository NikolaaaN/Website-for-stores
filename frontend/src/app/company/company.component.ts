import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private companyService: CompanyService) { }

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

}
