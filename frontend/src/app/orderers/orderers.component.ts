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
    this.registerService.registerOrderer(this.username, this.fullName, this.phone, this.email, this.companyName, this.address, this.taxID, this.companyID, this.noOfDays, this.percent).subscribe((message: string) => {
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
      console.log(data)
      this.registerService.registerOrderer(data.username, data.fullName, data.phone, data.email, data.companyName, data.address, this.pib, data.companyID, this.days, this.percentage).subscribe((message: string) => {
        this.message = message
      })
    })


  }

}
