import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../models/company';
import { DailyReport } from '../models/dailyreport';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-adminreview',
  templateUrl: './adminreview.component.html',
  styleUrls: ['./adminreview.component.css']
})
export class AdminreviewComponent implements OnInit {

  constructor(private router: Router, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getAllCompanies().subscribe((companies: Array<Company>) => {
      let total = 0
      let taxTotal = 0 
      companies.forEach(company => {
        this.report.name = company.companyName
        company.bills.forEach(bill => {
          if(typeof(bill.finalPrice) == typeof(1) && typeof(bill.taxPrice) == typeof(1)){
            total += bill.finalPrice
            taxTotal += bill.taxPrice
          }
        });
        this.report.fullPrice = total
        this.report.taxTotal = taxTotal
        this.dailyReport.push(this.report)
        this.report= new DailyReport()
        total = 0
        taxTotal = 0
      });
    })
  }

  companies: Array<Company> = []
  dailyReport: Array<DailyReport> = []
  report: DailyReport = new DailyReport()

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
