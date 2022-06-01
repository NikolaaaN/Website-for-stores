import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    
  }

  message: string

  username: string
  category: string
  code: string
  pdv: boolean
  bankAccount: string
  noOfStorages: number
  noOfCashRegisters: number

  submit(){
    this.username = sessionStorage.getItem('username')
    this.companyService.submitDetails(this.username, this.category, this.code, this.pdv, this.bankAccount, this.noOfStorages, this.noOfCashRegisters).subscribe((mess: string) => {
      this.router.navigate(['company'])
    })
  }


}
