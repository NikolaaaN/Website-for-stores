import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-stolovi',
  templateUrl: './stolovi.component.html',
  styleUrls: ['./stolovi.component.css']
})
export class StoloviComponent implements OnInit {

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.drawCanvas()
    this.companyService.getCompanyByUsername().subscribe((company: Company) => {
      this.company = company
    })
  }

  company: Company

  drawCanvas(){
    
    let c = document.getElementById("myCanvas");
    this.companyService.drawCanvas(c)
    
  }

}
