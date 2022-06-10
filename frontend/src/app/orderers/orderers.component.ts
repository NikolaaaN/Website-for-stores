import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-orderers',
  templateUrl: './orderers.component.html',
  styleUrls: ['./orderers.component.css']
})
export class OrderersComponent implements OnInit {

  constructor(private registerService: RegisterService, private companyService: CompanyService) { }

  ngOnInit(): void {
    
    
  }

  allCompanies: Company[] = []
  message: string
  password: string
  username: string
  fullName : string
  phone : string
  email : string 
  companyName: string
  address : string
  taxID : string
  companyID : string
  noOfDays: number
  percent: number

  register(){
    this.registerService.registerOrderer(this.username, this.password, this.fullName, this.phone, this.email, this.companyName, this.address, this.taxID, this.companyID, this.noOfDays, this.percent).subscribe((message: string) => {
      this.message = message
    })
  }

  search(){
    this.companyService.getCompanyByID(this.pib).subscribe((data: Company[]) => {
      this.allCompanies = data;
    })
  }

  pib: string
  days: number
  percentage: number
  name: string

  addById(){
    this.companyService.getCompanyByIdAndName(this.pib, this.name).subscribe((data: Company) => {
      this.registerService.registerOrderer(data[0].username, data[0].password, data[0].fullName, data[0].phone, data[0].email, data[0].companyName, data[0].address, this.pib, data.companyID, this.days, this.percentage).subscribe((message: string) => {
        this.message = message
      })
    })


  }

}
