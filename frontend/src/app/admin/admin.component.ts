import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private http: HttpClient, private companyService: CompanyService) { }

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

}
