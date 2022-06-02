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
    this.companyService.getAllCompanies().subscribe((data: Company[]) => {
      this.allCompanies = data;
    })
  }

  allCompanies: Company[] = []

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
    else status = "aktivan"

    this.companyService.setStatus(status, username).subscribe( (message: string) => {
        if (message == "updated") this.companyService.getAllCompanies().subscribe((data: Company[]) => {
        this.allCompanies = data;
      })
    })
  }

  addCompany(){
    this.router.navigate(['/admin/addcompany'])
  }
  addBuyer(){
    this.router.navigate(['/admin/addbuyer'])
  }

}
