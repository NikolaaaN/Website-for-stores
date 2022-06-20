import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bills } from '../models/bills';
import { Company } from '../models/company';
import { User } from '../models/user';
import { CompanyService } from '../services/company.service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getAllCompanies().subscribe((companies: Array<Company>) => {
      this.companies = companies
      companies.forEach(company => {
        company.bills.forEach(bills => {
          this.bills.push(bills)
        });
      });
      this.bills.sort(
        (bill1,bill2) => Number(bill2.date) - Number(bill1.date)
      )
      for (let i = 1 ; i<6; i++){
        this.latestBills.push(this.bills[this.bills.length-i])
      }
    })
      
  }

  username: string
  password: string
  message: string

  selectedBill: number

  companies: Array<Company> = []
  bills: Array<Bills> = []
  latestBills: Array<Bills> = []

  login(){
    this.loginService.login(this.username, this.password).subscribe((user: User) =>{
      if (user != null){
        sessionStorage.setItem('username', this.username)
        sessionStorage.setItem('type', user.type+"")
        if (user.type == 1) {   
          this.companyService.getCompanyStatus(user.username).subscribe((status: string) => {
            sessionStorage.setItem('username', this.username)
            sessionStorage.setItem('type', user.type+"")
            if (status=="novo") {
              this.router.navigate(['company/details'])
            }
            else if (status == "aktivan") this.router.navigate(['company'])
            else this.message="Your company is inactive"
          })
          
        }
        if (user.type == 2) this.router.navigate(['buyer'])
        if (user.type == 3) this.message = "Login using the admin page"

      }
      else{
        this.message = "Wrong username or password"
      }
    })
  }
    
  register(){
    this.router.navigate(['register']);
  }
    
  selectBill(price){
    this.selectedBill =  price
  }

  unselectBill(){
    this.selectedBill = 0
  }
 

}
