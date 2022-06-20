import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private http: HttpClient, private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.loadCompanies()
  }

  allCompanies: Company[] = []
  pendingCompanies: Company[] = []

  delete(username){
    this.companyService.deleteCompany(username).subscribe((message: string) => {
      if (message == "deleted") this.companyService.getAllCompanies().subscribe((data: Company[]) => {
        this.allCompanies = data;
      })
    })
  }

  changeStatus(status, username){
    if (status == "aktivan" || status == "novo")
      status = "neaktivan"
    else if (status == "neaktivanNov" )
      status = "novo"
    else status = "aktivan"

    this.companyService.setStatus(status, username).subscribe( (message: string) => {
        this.loadCompanies()
    })
  }

  accept(username){
    let status = "novo"
    this.companyService.setStatus(status, username).subscribe( (message: string) => {
      this.loadCompanies()
  })
  }
  deny(username){
    let status = "neaktivanNov"
    this.companyService.setStatus(status, username).subscribe( (message: string) => {
      this.loadCompanies()
  })
  }

  loadCompanies(){
    this.companyService.getAllCompanies().subscribe((data: Company[]) => {
      this.allCompanies.splice(0)
      this.pendingCompanies.splice(0)
      let i = 0
      this.allCompanies = data;
      this.allCompanies.forEach(company => {
          if(company.status == "pending"){
            this.pendingCompanies.push(company)
            this.allCompanies.splice(i,1)    
          }
          i++
      });
    })
  }

  addCompany(){
    this.router.navigate(['/admin/addcompany'])
  }
  addBuyer(){
    this.router.navigate(['/admin/addbuyer'])
  }
  review(){
    this.router.navigate(['/admin/review'])
  }

}
