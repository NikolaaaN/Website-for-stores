import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { Stores } from '../models/stores';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private companyService: CompanyService) { }

  menuLists= ['opste informacije', 'detalji', 'objekti']
  selected = 'opste informacije'

  ngOnInit(): void {
    this.companyService.getCompanyByUsername().subscribe((company: Company) => {
      this.company = company
      this.fullName = company.fullName
      this.phone = company.phone
      this.email = company.email
      this.companyName = company.companyName
      this.objects = company.objects
      console.log(this.objects)
    })
    this.companyService.getCompanyDetails(sessionStorage.getItem('username')).subscribe( (company: Company) => {
      console.log(company)
      this.category = company.category
      this.code = company.code
      this.pdv = company.tax
      this.bankAccount = company.bankAccount
      this.noOfStorages = company.storageNumber
      this.noOfCashRegisters = company.cashRegisterNumber
    })
    
  }

  fullName: string
  email: string
  companyName: string
  phone: string
  category: string
  code: string
  pdv: boolean
  bankAccount: string
  noOfStorages: number
  noOfCashRegisters: number
  company: Company
  objects: Array<Stores> = []

  update(){
    let username= sessionStorage.getItem('username')
    this.companyService.updateGeneralDetails(this.category, this.code, this.pdv, this.bankAccount, this.noOfCashRegisters, this.noOfStorages, username).subscribe((message: string) => {
      console.log(message)

    })
  }

  setSelectedItem(item){
    this.selected = item
  }

}
